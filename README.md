# Minimalistic Gridworld Environment (MiniGrid)

This gridworld Gym environment is based on Stuart Armstrong's ["toy model of the treacherous model"](https://www.lesswrong.com/posts/xt5Z2Kgp8HXTRKmQf/a-toy-model-of-the-treacherous-turn)

Requirements:
- Python 3
- OpenAI Gym
- NumPy

## Installation

Clone this repository and install the other dependencies with `pip3`:

```
git clone https://github.com/mtrazzi/gym-alttp-gridworld.git
cd gym-alttp-gridworld
pip3 install numpy
pip3 install gym
```

## Use gym-gridworld

```
import gym
import gym_gridworld
env = gym.make('gridworld-v0')
_ = env.reset()
_ = env.step(env.action_space.sample())
```

## Getting Started with Table Q-learning

For the Reinforcement Learning algorithm, I used Table Q-learning.

To start the training and visualize the environment, do the following command at the root of the directory:

```
python3 main.py
``` 


To render the environment, two options are available.

```
python3 main.py browser
python3 main.py terminal
```

## Environment Design

	Structure of the world:
	- The world is a 6x4 grid of tiles
	- The Shopkeeper, and the Ice tiles can be destroyed by arrows
	- The Heart and Crystal Tiles can be "picked up" by Link
	- The Heart-Machine and Hole are actionable tiles that can deliver a Heart

	8 Possible Actions:
	- Move/Activate left/right/up/down.
	- Shoot arrow left/right/up/down

	A reward of 1 is given for success (if link picks up a heart).
	For every normal time step (shooting an arrow at something, moving to another tile), there is a -0.1 reward.
