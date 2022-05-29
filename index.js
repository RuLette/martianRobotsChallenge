const compass = ["N", "E", "S", "W"];

let coordinates = { x: "", y: "", pos: "" };
let gridMaxCoordinates = [];

function moveRobot(command) {
  //Takes in command "L", "F", etc
  //Needs to filter each command
  let index;
  switch (command) {
    case "L":
    //North + L = East, anything else is compass value of index - 1 or + 1
    case "R":
    //compass value of index - 1 or + 1
    case "F":
    //retrieve coordinate pos and increment
  }
}

function spliceIntoChunks(arr, chunkSize) {
  const res = [];
  let sanitizedArray = arr.filter((el) => el);
  while (sanitizedArray.length > 0) {
    const chunk = sanitizedArray.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

function extractCoordinates(str) {
  str = str.split(" ");
  return {
    x: Number(str[0]),
    y: Number(str[1]),
    pos: str[2],
  };
}

function launchRobot(input) {
  let sanitizedInput = input.split("\n");
  gridMaxCoordinates = sanitizedInput.slice(0, 1);
  gridMaxCoordinates = gridMaxCoordinates[0].split(" ").map(Number);
  let remainingInput = sanitizedInput.slice(1, input.length - 1);
  let directions = spliceIntoChunks(remainingInput, 2);
  for (let direction of directions) {
    coordinates = extractCoordinates(direction[0]);
    commands = direction[1].split("");
    commands.forEach((command) => moveRobot(command));
  }
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
  moveRobot,
  extractCoordinates,
  spliceIntoChunks,
};
