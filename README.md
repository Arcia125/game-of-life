# Conway's Game of Life made with React.js

[Live version](https://arcia125.github.io/game-of-life/dist/ "React Game of Life")

![John Conway's Game  of Life](https://raw.githubusercontent.com/Arcia125/kevinmhallett/master/src/images/project-life.png)
##The Game

The [Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life "Wikipedia: John Conway's Game of Life") was invented by a Cambridge mathematician named [John Conway](https://en.wikipedia.org/wiki/John_Horton_Conway "Wikipedia: John Conway") in 1970. The game really doesn't have any players, John Conway calls it a "no-player game." It is actually a [cellular automaton](https://en.wikipedia.org/wiki/Cellular_automaton "Wikipedia: Cellular Automaton") which is basically a grid of cells that can have a finite number of states (e.g. alive or dead) that follow a set of rules to determine their state in future generations.
##The Rules

All cells can either be alive (shades of green) or dead (black). Each cell has a neighborhood of consisting of every cell touching it.

Living cells with a light green color are born more recently than those that are a darker green. Living cells will die of loneliness if they have one or less living neighbors. If a living cell has four or more neighbors it dies of overcrowding. Dead cells can only be born in the next generation if they have exactly 3 living neighbors.
