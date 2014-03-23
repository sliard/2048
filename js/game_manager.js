// 0: up, 1: right, 2:down, 3: left
var MOVE_UP = 0;
var MOVE_RIGHT = 1;
var MOVE_DOWN = 2;
var MOVE_LEFT = 3;

var nextMove = MOVE_LEFT;
var timer = 200;
var gm;

function autoPlay()
{
    // a b c d
    // e f g h
    // i j k l
    // m n o p

    a = gm.grid.cellContent({ x: 0, y: 0 });
    b = gm.grid.cellContent({ x: 1, y: 0 });
    c = gm.grid.cellContent({ x: 2, y: 0 });
    d = gm.grid.cellContent({ x: 3, y: 0 });
    line0_full = a && b && c && d;

    e = gm.grid.cellContent({ x: 0, y: 1 });
    f = gm.grid.cellContent({ x: 1, y: 1 });
    g = gm.grid.cellContent({ x: 2, y: 1 });
    h = gm.grid.cellContent({ x: 3, y: 1 });
    line1_full = e && f && g && h;

    i = gm.grid.cellContent({ x: 0, y: 2 });
    j = gm.grid.cellContent({ x: 1, y: 2 });
    k = gm.grid.cellContent({ x: 2, y: 2 });
    l = gm.grid.cellContent({ x: 3, y: 2 });
    line2_full = i && j && k && l;

    m = gm.grid.cellContent({ x: 0, y: 3 });
    n = gm.grid.cellContent({ x: 1, y: 3 });
    o = gm.grid.cellContent({ x: 2, y: 3 });
    p = gm.grid.cellContent({ x: 3, y: 3 });
    line3_full = m && n && o && p;

    afterMove = (nextMove == MOVE_LEFT) ? MOVE_DOWN : MOVE_LEFT;
    relaod = false;

    if((m && n && (m.value == n.value)) || (n && o && (n.value == o.value)) || (o && p && (o.value == p.value))) {
        gm.move(MOVE_LEFT);
        relaod = true;
        console.log('Left 3 Egal');
    }

// line 3
    if(i && m && (i.value == m.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 3 - A');
    } else if(m && j && n && (j.value == n.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 3 - B');
    } else if(m && k && o && (k.value == o.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 3 - C');
    } else if(m && l && p && (l.value == p.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 3 - D');
    } else

// line 2
    if(m && e && i && (e.value == i.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 2 - A');
    } else if(m && f && j && (f.value == j.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 2 - B');
    } else if(m && g && k && (g.value == k.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 2 - C');
    } else if(m && h && l && (h.value == l.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 2 - D');
    } else

// line 1

    if(m  && a && e && (a.value == e.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 1 - A');
    } else if(m && b && f && (b.value == f.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 1 - B');
    } else if(m && c && g && (c.value == g.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 1 - C');
    } else if(m && d && h && (d.value == h.value)) {
        gm.move(MOVE_DOWN);
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Line 1 - D');
    } else if(line3_full && ((i && j && (i.value == j.value)) || (j && k && (j.value == k.value)) || (k && l && (k.value == l.value)))) {
        gm.move(MOVE_LEFT);
        relaod = true;
        console.log('Left 2 Egal');
    } else if(line2_full && line3_full && ((e && f && (e.value == f.value)) || (f && g && (f.value == g.value)) || (g && h && (g.value == h.value)))) {
        gm.move(MOVE_LEFT);
        relaod = true;
        console.log('Left 1 Egal');
    } else if(line1_full && line2_full && line3_full && ((a && b && (a.value == b.value)) || (b && c && (b.value == c.value)) || (c && d && (c.value == d.value)))) {
        gm.move(MOVE_LEFT);
        relaod = true;
        console.log('Left 0 Egal');
    } else


    if(line3_full && i && j && k && !l && ((i.value == n.value) || (j.value == o.value) || (k.value == p.value))) {
        gm.move(MOVE_RIGHT);
        nextMove = MOVE_DOWN;
        relaod = true;
        console.log('Egal D-B - line 2');
    } else

    if(line3_full && line2_full && e && f && g && !h && ((e.value == j.value) || (f.value == k.value) || (g.value == l.value))) {
        gm.move(MOVE_RIGHT);
        nextMove = MOVE_DOWN;
        relaod = true;
        console.log('Egal D-B - line 1');
    } else

    if(line3_full && line2_full && line1_full && a && b && c && !d && ((a.value == f.value) || (b.value == g.value) || (c.value == h.value))) {
        gm.move(MOVE_RIGHT);
        nextMove = MOVE_DOWN;
        relaod = true;
        console.log('Egal D-B - line 0');
    } else

    if(gm.move(nextMove)) {
        nextMove = afterMove;
        console.log('Go to : '+nextMove);
        relaod = true;
    } else if (gm.move(afterMove)){
        relaod = true;
        console.log('Go to after : '+afterMove);
    } else if(gm.move(MOVE_RIGHT)) {
        m = gm.grid.cellContent({ x: 0, y: 3 });
        if(!m) {
            gm.move(MOVE_LEFT);
            console.log('Droite gauche');
            nextMove = MOVE_DOWN;
        } else {
            console.log('Droite');
            nextMove = MOVE_LEFT;
        }
        relaod = true;
    } else if(gm.move(MOVE_UP) || gm.move(MOVE_DOWN)) {
        nextMove = MOVE_LEFT;
        relaod = true;
        console.log('Haut bas');
    }

    if(relaod) {
        setTimeout(autoPlay,timer);
    }

}



function GameManager(size, InputManager, Actuator, ScoreManager) {
  this.size         = size; // Size of the grid
  this.inputManager = new InputManager;
  this.scoreManager = new ScoreManager;
  this.actuator     = new Actuator;

  this.startTiles   = 2;

//  this.inputManager.on("move", this.move.bind(this));
//  this.inputManager.on("move", autoPlay);
  this.inputManager.on("restart", this.restart.bind(this));
  this.inputManager.on("keepPlaying", this.keepPlaying.bind(this));

  this.setup();
  gm = this;
  setTimeout(autoPlay,timer);
}

// Restart the game
GameManager.prototype.restart = function () {
  this.actuator.continue();
  this.setup();

  nextMove = MOVE_LEFT;
  setTimeout(autoPlay,timer);
};

// Keep playing after winning
GameManager.prototype.keepPlaying = function () {
  this.keepPlaying = true;
  this.actuator.continue();
};

GameManager.prototype.isGameTerminated = function () {
  if (this.over || (this.won && !this.keepPlaying)) {
    return true;
  } else {
    return false;
  }
};

// Set up the game
GameManager.prototype.setup = function () {
  this.grid        = new Grid(this.size);

  this.score       = 0;
  this.over        = false;
  this.won         = false;
  this.keepPlaying = false;

  // Add the initial tiles
  this.addStartTiles();

  // Update the actuator
  this.actuate();
};

// Set up the initial tiles to start the game with
GameManager.prototype.addStartTiles = function () {
  for (var i = 0; i < this.startTiles; i++) {
    this.addRandomTile();
  }
};

// Adds a tile in a random position
GameManager.prototype.addRandomTile = function () {
  if (this.grid.cellsAvailable()) {
    var value = Math.random() < 0.9 ? 2 : 4;
    var tile = new Tile(this.grid.randomAvailableCell(), value);

    this.grid.insertTile(tile);
  }
};

// Sends the updated grid to the actuator
GameManager.prototype.actuate = function () {
  if (this.scoreManager.get() < this.score) {
    this.scoreManager.set(this.score);
  }

  this.actuator.actuate(this.grid, {
    score:      this.score,
    over:       this.over,
    won:        this.won,
    bestScore:  this.scoreManager.get(),
    terminated: this.isGameTerminated()
  });

};

// Save all tile positions and remove merger info
GameManager.prototype.prepareTiles = function () {
  this.grid.eachCell(function (x, y, tile) {
    if (tile) {
      tile.mergedFrom = null;
      tile.savePosition();
    }
  });
};

// Move a tile and its representation
GameManager.prototype.moveTile = function (tile, cell) {
  this.grid.cells[tile.x][tile.y] = null;
  this.grid.cells[cell.x][cell.y] = tile;
  tile.updatePosition(cell);
};

// Move tiles on the grid in the specified direction
GameManager.prototype.move = function (direction) {
  // 0: up, 1: right, 2:down, 3: left
  var self = this;

  if (this.isGameTerminated()) return; // Don't do anything if the game's over

  var cell, tile;

  var vector     = this.getVector(direction);
  var traversals = this.buildTraversals(vector);
  var moved      = false;

  // Save the current tile positions and remove merger information
  this.prepareTiles();

  // Traverse the grid in the right direction and move tiles
  traversals.x.forEach(function (x) {
    traversals.y.forEach(function (y) {
      cell = { x: x, y: y };
      tile = self.grid.cellContent(cell);

      if (tile) {
        var positions = self.findFarthestPosition(cell, vector);
        var next      = self.grid.cellContent(positions.next);

        // Only one merger per row traversal?
        if (next && next.value === tile.value && !next.mergedFrom) {
          var merged = new Tile(positions.next, tile.value * 2);
          merged.mergedFrom = [tile, next];

          self.grid.insertTile(merged);
          self.grid.removeTile(tile);

          // Converge the two tiles' positions
          tile.updatePosition(positions.next);

          // Update the score
          self.score += merged.value;

          // The mighty 2048 tile
          if (merged.value === 2048) self.won = true;
        } else {
          self.moveTile(tile, positions.farthest);
        }

        if (!self.positionsEqual(cell, tile)) {
          moved = true; // The tile moved from its original cell!
        }
      }
    });
  });

  if (moved) {
    this.addRandomTile();

    if (!this.movesAvailable()) {
      this.over = true; // Game over!
    }

    this.actuate();
  }

    return moved;
};

// Get the vector representing the chosen direction
GameManager.prototype.getVector = function (direction) {
  // Vectors representing tile movement
  var map = {
    0: { x: 0,  y: -1 }, // up
    1: { x: 1,  y: 0 },  // right
    2: { x: 0,  y: 1 },  // down
    3: { x: -1, y: 0 }   // left
  };

  return map[direction];
};

// Build a list of positions to traverse in the right order
GameManager.prototype.buildTraversals = function (vector) {
  var traversals = { x: [], y: [] };

  for (var pos = 0; pos < this.size; pos++) {
    traversals.x.push(pos);
    traversals.y.push(pos);
  }

  // Always traverse from the farthest cell in the chosen direction
  if (vector.x === 1) traversals.x = traversals.x.reverse();
  if (vector.y === 1) traversals.y = traversals.y.reverse();

  return traversals;
};

GameManager.prototype.findFarthestPosition = function (cell, vector) {
  var previous;

  // Progress towards the vector direction until an obstacle is found
  do {
    previous = cell;
    cell     = { x: previous.x + vector.x, y: previous.y + vector.y };
  } while (this.grid.withinBounds(cell) &&
           this.grid.cellAvailable(cell));

  return {
    farthest: previous,
    next: cell // Used to check if a merge is required
  };
};

GameManager.prototype.movesAvailable = function () {
  return this.grid.cellsAvailable() || this.tileMatchesAvailable();
};

// Check for available matches between tiles (more expensive check)
GameManager.prototype.tileMatchesAvailable = function () {
  var self = this;

  var tile;

  for (var x = 0; x < this.size; x++) {
    for (var y = 0; y < this.size; y++) {
      tile = this.grid.cellContent({ x: x, y: y });

      if (tile) {
        for (var direction = 0; direction < 4; direction++) {
          var vector = self.getVector(direction);
          var cell   = { x: x + vector.x, y: y + vector.y };

          var other  = self.grid.cellContent(cell);

          if (other && other.value === tile.value) {
            return true; // These two tiles can be merged
          }
        }
      }
    }
  }

  return false;
};

GameManager.prototype.positionsEqual = function (first, second) {
  return first.x === second.x && first.y === second.y;
};
