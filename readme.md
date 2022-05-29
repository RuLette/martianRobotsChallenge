# Martian Robots

### Installation

To install

> ```console
> $ npm install
> ```

To run the tests

> ```console
> $ npm test
> ```

### Requirements

Write a program that determines each sequence of robot positions and reports the final position of the robot.

The Problem
The surface of Mars can be modelled by a rectangular grid around which robots are able to
move according to instructions provided from Earth. You are to write a program that
determines each sequence of robot positions and reports the final position of the robot.
A robot position consists of a grid coordinate (a pair of integers: x-coordinate followed by
y-coordinate) and an orientation (N, S, E, W for north, south, east, and west).
A robot instruction is a string of the letters “L”, “R”, and “F” which represent, respectively, the
instructions:
● Left : the robot turns left 90 degrees and remains on the current grid point.
● Right : the robot turns right 90 degrees and remains on the current grid point.
● Forward : the robot moves forward one grid point in the direction of the current
orientation and maintains the same orientation.
The direction North corresponds to the direction from grid point (x, y) to grid point (x, y+1).

There is also a possibility that additional command types may be required in the future and
provision should be made for this.
Since the grid is rectangular and bounded (...yes Mars is a strange planet), a robot that
moves “off” an edge of the grid is lost forever. However, lost robots leave a robot “scent” that
prohibits future robots from dropping off the world at the same grid point. The scent is left at
the last grid position the robot occupied before disappearing over the edge. An instruction to
move “off” the world from a grid point from which a robot has been previously lost is simply
ignored by the current robot.

### Timeline

Two to three hours

### Process

Drawing out the problem helped with an understanding of it

![sketch](https://user-images.githubusercontent.com/29276064/170887214-de68d6ca-f766-4d3d-a6c9-a7850c7a6cb0.jpeg)

Test driven development:
Pseudo coding => writing failing test cases => writing the code => getting test to pass => refactoring

### WIP

Some lost robots are still returning as the last known coordinate of the robot, but should be returning the robot's last known drop off point instead

Some functions are getting large and could use some refactoring
