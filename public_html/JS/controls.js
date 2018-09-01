//################
//### Controle ###
//################

var maxVal_gameButton = 60;

var keyArrowUp = 38;
var fireArrowUp = 0;
var gameArrowUp = 0;

var keyButton1 = 65;
var fireButton1 = 0;
var gameButton1 = 0;

function getControls() {
    document.addEventListener('keydown',
            function (event) {
//        alert("Tecla "+event.keyCode);
                if (event.keyCode === keyButton1)
                {
                    fireButton1 = 1;
                }
                if (event.keyCode === keyArrowUp)
                {
                    fireArrowUp = 1;
                }
            }
    );
    document.addEventListener('keyup',
            function (event) {
                if (event.keyCode === keyButton1)
                {
                    fireButton1 = 0;
                }
                if (event.keyCode === keyArrowUp)
                {
                    fireArrowUp = 0;
                }
            }
    );

    if (fireButton1 > 0)
    {
        gameButton1++;
        gameButton1 = Math.min(maxVal_gameButton, gameButton1);
    } else
    {
        gameButton1 = 0;
    }
    if (fireArrowUp > 0)
    {
        gameArrowUp++;
        gameArrowUp = Math.min(maxVal_gameButton, gameArrowUp);
    } else
    {
        gameArrowUp = 0;
    }


    debug_escrever("span_Debug_gameButton1", gameButton1);
    debug_escrever("span_Debug_gameArrowUp", gameArrowUp);
}