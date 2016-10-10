# Game of Life
## Conway's Game of Life made with React

[Live version](https://arcia125.github.io/game-of-life/dist/ "React Game of Life")

![John Conway's Game  of Life](https://github.com/Arcia125/kevinmhallett/blob/master/src/images/project-life.png "React John Conway's Game of life")
##The Game

The Game of Life was invented by a Cambridge mathematician named John Conway in 1970. The game really doesn't have any players, John Conway calls it a "no-player game." It is actually a cellular automaton which is basically a grid of cells that can have a finite number of states (e.g. alive or dead) that follow a set of rules to determine their state in future generations.
##The Rules

All cells can either be alive (shades of green) or dead (black). Each cell has a neighborhood of consisting of every cell touching it.

Living cells with a light green color are born more recently than those that are a darker green. Living cells will die of loneliness if they have one or less living neighbors. If a living cell has four or more neighbors it dies of overcrowding. Dead cells can only be born in the next generation if they have exactly 3 living neighbors.