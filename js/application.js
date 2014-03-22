// Wait till the browser is ready to render the game (avoids glitches)

var gm;
// 0: up, 1: right, 2:down, 3: left
var lastMove = 3;

var timer = 100;

function myTimer()
{
    nextMove = (lastMove == 3) ? 2 : 3;
    if(gm.move(lastMove)) {
        lastMove = nextMove;
        setTimeout(myTimer,timer);
    } else if (gm.move(nextMove)){
        setTimeout(myTimer,timer);
    } else if(gm.move(1)) {

        bottomLeft = gm.grid.cellContent({ x: 0, y: 3 });
        a = gm.grid.cellContent({ x: 0, y: 0 });
        b = gm.grid.cellContent({ x: 0, y: 1 });
        c = gm.grid.cellContent({ x: 0, y: 2 });

        if (bottomLeft || (!a && !b && !c)) {
            gm.move(2);
        }
        gm.move(3)

        setTimeout(myTimer,timer);
    } else if(gm.move(0) || gm.move(2)) {
        setTimeout(myTimer,timer);
    }

}

window.requestAnimationFrame(function () {
    gm = new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
    setTimeout(myTimer,timer);
});
