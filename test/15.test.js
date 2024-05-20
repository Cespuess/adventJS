const {
  autonomousDrive,
  findRobot,
  turnRight,
  turnLeft,
  goUp,
  goDown
} = require('../ejercicios/15');

describe('autonomousDrive', () => {
  it('find robot in element', () => {
    expect(findRobot(['..**.', '..***..', '..*!..*'])).toEqual([2, 3]);
    expect(findRobot(['.**..', '**...*!..', '*..***:'])).toEqual([1, 6]);
  });
  it('turn right', () => {
    expect(turnRight(['...*!'], 0, 4, +1)).toEqual(['...*!']);
    expect(turnRight(['..!**.'], 0, 2)).toEqual(['..!**.']);
    expect(turnRight(['..!.*.'], 0, 2)).toEqual(['...!*.']);
  });
  it('turn left', () => {
    expect(turnLeft(['!..*.'], 0, 0)).toEqual(['!..*.']);
    expect(turnLeft(['...*!.'], 0, 4)).toEqual(['...*!.']);
    expect(turnLeft(['..!**.'], 0, 2)).toEqual(['.!.**.']);
  });
  it('go Up', () => {
    expect(goUp(['...!', '....'], 0, 3)).toEqual(['...!', '....']);
    expect(goUp(['...*', '...!'], 1, 3)).toEqual(['...*', '...!']);
    expect(goUp(['....', '...!'], 1, 3)).toEqual(['...!', '....']);
  });
  it('go Down', () => {
    expect(goDown(['....', '...!'], 1, 3)).toEqual(['....', '...!']);
    expect(goDown(['...!', '...*'], 0, 3)).toEqual(['...!', '...*']);
    expect(goDown(['...!', '....'], 0, 3)).toEqual(['....', '...!']);
  });
  it('autonomous Drive', () => {
    expect(
      autonomousDrive(['..!....', '...*.*.'], ['R', 'R', 'D', 'L'])
    ).toEqual(['.......', '...*!*.']);
    expect(autonomousDrive(['..!..', '...*.'], ['R', 'L', 'u', 'L'])).toEqual([
      '.!...',
      '...*.'
    ]);
    expect(autonomousDrive(['..!..', '..*.*'], ['d', 'R', 'D', 'L'])).toEqual([
      '.....',
      '..*!*'
    ]);
  });
});
