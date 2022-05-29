const compass = ["N", "E", "S", "W"];

let coordinates = { x: "", y: "", pos: "" };
let gridMaxCoordinates = [];
let commands = [];
let allCoordinates = [];

function moveRobot(command) {
  let index;
  switch (command) {
    case "L":
      index =
        coordinates.pos === "N" ? 3 : compass.indexOf(coordinates.pos) - 1;
      coordinates.pos = compass[index];
      break;

    case "R":
      index =
        coordinates.pos === "W" ? 0 : compass.indexOf(coordinates.pos) + 1;
      coordinates.pos = compass[index];
      break;

    case "F":
      switch (coordinates.pos) {
        case "N":
          coordinates.y += 1;
          break;
        case "E":
          coordinates.x += 1;
          break;
        case "S":
          coordinates.y -= 1;
          break;
        case "W":
          coordinates.x -= 1;
          break;

        default:
          throw new Error("There's been an error with the robot's position");
      }
      break;

    default:
      throw new Error("Only L, F and R are valid commands");
  }
  checkRobotGridBoundaries(coordinates);
  return coordinates;
}

function checkRobotGridBoundaries(input) {
  const maxXcoordinate = gridMaxCoordinates[0];
  const maxYcoordinate = gridMaxCoordinates[1];
  let { x, y } = input;
  let currentCoordinate = [x, y];
  if (x > maxXcoordinate) {
    coordinates.x = maxXcoordinate;
  } else if (y > maxYcoordinate) {
    coordinates.y = maxYcoordinate;
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
    let coordinateString = `${coordinates.x} ${coordinates.y} ${
      coordinates.pos
    } ${coordinates.status || ""}`;
    allCoordinates.push(coordinateString);
  }
  return allCoordinates.join("\n");
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
