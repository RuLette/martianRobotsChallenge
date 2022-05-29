const compass = ["N", "E", "S", "W"];

let coordinates = { x: "", y: "", pos: "" };
let grid = [];

function moveRobot(command) {
  //Takes in command "L", "F", etc
  //Needs to filter each command
  //North + L = East, anything else is compass value of index - 1 or + 1
}

//main function to launch robot here

function launchRobot(input) {
  return input;
  //takes input string
  //format into array - taking array[0] as grid
  //iterate over directions
  //function to move robot
  //function to checkGrid
  //function to check if robot lost
}

function checkRobotGridBoundaries(input) {
  //if input larger than grid
}

launchRobot(
  `5 3
1 1 E
LFLFLFLF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`
);

module.exports = {
  launchRobot,
};
