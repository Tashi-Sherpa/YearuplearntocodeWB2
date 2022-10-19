var roomDimension = 224;
var tiles = 12;
var additionalPercent = 0.10;
var initialTiles = (roomDimension) / (tiles);

var additionalTiles = (initialTiles) * (additionalPercent);

var boxes = (initialTiles) + (additionalTiles);

console.log( " I will buy " + Math.round (boxes) + " boxes ");