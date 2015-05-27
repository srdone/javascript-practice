describe('Bowling Game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  });

  it('should exist', function () {
    expect(game).toBeDefined();
  });

  it('should have a prototype of Game', function () {
    expect(game instanceof Game).toBe(true);
  });

  it('should have a roll method', function () {
    expect(game.roll).toBeDefined();
    expect(game.roll).toBeFunction();
  });

  it('should have a 0 score if every roll hits 0 pins', function () {
    for(var i = 0; i < 20; i++) {
      game.roll(0);
    }

    expect(game.score).toBe(0);
  });

  it('should have a score of 20 after hiting one pin each roll', function () {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }

    expect(game.score).toBe(20);
  });

});
