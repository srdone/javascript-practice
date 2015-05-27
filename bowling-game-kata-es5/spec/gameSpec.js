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

});
