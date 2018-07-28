from gym.envs.registration import register

register(
        id='LinkToThePastEnv-v0',
        entry_point='gym_alttp_gridworld.envs:LinkToThePastEnv',
        )
