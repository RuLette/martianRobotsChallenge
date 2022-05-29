const { launchRobot } = require("./index");

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
