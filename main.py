# adapted from: https://medium.com/emergent-future/simple-reinforcement-learning-with-tensorflow-part-0-q-learning-with-tables-and-neural-networks-d195264329d0
import numpy as np
import os
import random
import sys

def gridworld():
    import gym
    import gym_alttp_gridworld
    return gym.make('LinkToThePastEnv-v0')

def main():
    render_mode = 'browser'
    if (len(sys.argv) > 1):
        render_mode = sys.argv[1]
    env = gridworld()
    total_reward = 0
    # Initialize table with all zeros
    Q = np.zeros([env.observation_space.n,env.action_space.n])
    # Set learning parameters
    lr = .8
    y = .95
    epsilon = 0.1
    num_episodes = 20000
    steps_per_episode = 200
    for i in range(num_episodes):
        # Reset environment and get first new observation
        s = env.reset()
        rAll = 0
        d = False
        j = 0
        #The Q-Table learning algorithm
        while j < steps_per_episode:
            if (render_mode == 'terminal' and i > 0 and (i % 1000) == 0):
                env.render('terminal')
            elif (render_mode == 'browser'):
                env.render('browser')
            j += 1
            # Choose an action by epsilon-greedy (with noise) picking from Q table
            if (random.random() < (epsilon / np.log(i+2))):
                a = random.randint(0, env.action_space.n - 1)
            else:
                a = np.argmax(Q[s,:] + np.random.randn(1,env.action_space.n)*(1./(i+1)))
            # Get new state and reward from environment
            s1,r,d,_ = env.step(a)
            # Update Q-Table with new knowledge
            s1 = int(s1)
            Q[s,a] = Q[s,a] + lr * (r + y * np.max(Q[s1,:]) - Q[s,a])
            rAll += r
            s = s1
            if d == True:
                break
        if (render_mode == 'browser' and i > 0 and (i % 1000) == 0):
            env.browser_rendering(i * steps_per_episode, (i + 1) * steps_per_episode, i)
        os.system('cls' if os.name == 'nt' else 'clear')
        print("num_episodes: ", i, "\nreward: ", int(rAll))

if __name__ == "__main__":
    main()
