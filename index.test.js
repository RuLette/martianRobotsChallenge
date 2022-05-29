const {
  spliceIntoChunks,
  launchRobot,
  moveRobot,
  extractCoordinates,
} = require("./index");

test("Should intake string input of coordinates format it into an object", () => {
  const formatCoordinatesIntoObject = extractCoordinates("1 1 E");
  expect(formatCoordinatesIntoObject).toEqual({ x: 1, y: 1, pos: "E" });
});

test("Should intake array of strings and format it into an array of arrays without any whitespaces", () => {
  let inputArray = [
    "1 1 E",
    "LFLFLFLF",
    "",
    "3 2 N",
    "FRRFLLFFRRFLL",
    "",
    "0 3 W",
    "LLFFFLFLFL",
  ];
  const arrayToSplice = spliceIntoChunks(inputArray, 2);
  const expectedOutput = [
    ["1 1 E", "LFLFLFLF"],
    ["3 2 N", "FRRFLLFFRRFLL"],
    ["0 3 W", "LLFFFLFLFL"],
  ];
  expect(arrayToSplice).toEqual(expectedOutput);
});

test("Should intake string commands and update coordinates each time it is run", () => {
  const compass = ["N", "E", "S", "W"];
  let coordinates = { x: "1", y: "1", pos: "E", status: "" };
  const command = "L";
  let gridMaxCoordinates = [5, 3];
  expect(moveRobot(command)).toEqual({ x: 2, y: 3, pos: "E", status: "" });
});

test("Should intake a string with instructions, and output a string of coordinates and status", () => {
  const inputString = `5 3
1 1 E
LFLFLFLF

3 2 N
FRRFLLFFRRFLL

0 3 W
LLFFFLFLFL`;

  const launchRobotWithString = launchRobot(inputString);
  const expectedOutput = `1 1 E
3 3 N LOST
2 3 S
`;
  expect(launchRobotWithString).toBe(expectedOutput);
});
