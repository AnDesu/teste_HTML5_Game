//################
//### Controle ###
//################

//Mouse
var main_mousePosX = 0;
var main_mousePosY = 0;
var main_isMouseDown = false;

//Keyboard
var maxVal_gameButton = 60;

var keyArrowUp = 38;
keyArrowUp = 87;
var fireArrowUp = 0;
var gameArrowUp = 0;

var keyArrowDown = 40;
keyArrowDown = 83;
var fireArrowDown = 0;
var gameArrowDown = 0;

var keyArrowLeft = 37;
keyArrowLeft = 65;
var fireArrowLeft = 0;
var gameArrowLeft = 0;

var keyArrowRight = 39;
keyArrowRight = 68;
var fireArrowRight = 0;
var gameArrowRight = 0;

var keyButton1 = 65;
keyButton1 = 74;
var fireButton1 = 0;
var gameButton1 = 0;

var keyButton2 = 83;
keyButton2 = 75;
var fireButton2 = 0;
var gameButton2 = 0;

var keyButtonStart = 13;
var fireButtonStart = 0;
var gameButtonStart = 0;

function contrls_Init() {
    document.onmousemove = function (event) {
        main_mousePosX = event.clientX;
        main_mousePosY = event.clientY;
    };    
    document.body.onmousedown = function () {
        main_isMouseDown = true;
    };
    document.body.onmouseup = function () {
        main_isMouseDown = false;
    };
    
    

    document.addEventListener('keydown',
            function (event) {
                if (event.keyCode === keyArrowUp)
                {
                    fireArrowUp = 1;
                }
                if (event.keyCode === keyArrowDown)
                {
                    fireArrowDown = 1;
                }
                if (event.keyCode === keyArrowLeft)
                {
                    fireArrowLeft = 1;
                }
                if (event.keyCode === keyArrowRight)
                {
                    fireArrowRight = 1;
                }
                if (event.keyCode === keyButton1)
                {
                    fireButton1 = 1;
                }
                if (event.keyCode === keyButton2)
                {
                    fireButton2 = 1;
                }
                if (event.keyCode === keyButtonStart)
                {
                    fireButtonStart = 1;
                }
            }
    );
    document.addEventListener('keyup',
            function (event) {
                if (event.keyCode === keyArrowUp)
                {
                    fireArrowUp = 0;
                }
                if (event.keyCode === keyArrowDown)
                {
                    fireArrowDown = 0;
                }
                if (event.keyCode === keyArrowLeft)
                {
                    fireArrowLeft = 0;
                }
                if (event.keyCode === keyArrowRight)
                {
                    fireArrowRight = 0;
                }
                if (event.keyCode === keyButton1)
                {
                    fireButton1 = 0;
                }
                if (event.keyCode === keyButton2)
                {
                    fireButton2 = 0;
                }
                if (event.keyCode === keyButtonStart)
                {
                    fireButtonStart = 0;
                }
            }
    );
    
    return;
}

function contrls_getControls() {
//    document.addEventListener('keydown',
//            function (event) {
////        alert("Tecla "+event.keyCode);
//                if (event.keyCode === keyArrowUp)
//                {
//                    fireArrowUp = 1;
//                }
//                if (event.keyCode === keyArrowDown)
//                {
//                    fireArrowDown = 1;
//                }				
//                if (event.keyCode === keyArrowLeft)
//                {
//                    fireArrowLeft = 1;
//                }				
//                if (event.keyCode === keyArrowRight)
//                {
//                    fireArrowRight = 1;
//                }
//                if (event.keyCode === keyButton1)
//                {
//                    fireButton1 = 1;
//                }
//                if (event.keyCode === keyButton2)
//                {
//                    fireButton2 = 1;
//                }                                
//                if (event.keyCode === keyButtonStart)
//                {
//                    fireButtonStart = 1;
//                }
//            }
//    );
//    document.addEventListener('keyup',
//            function (event) {                
//                if (event.keyCode === keyArrowUp)
//                {
//                    fireArrowUp = 0;
//                }
//                if (event.keyCode === keyArrowDown)
//                {
//                    fireArrowDown = 0;
//                }				
//                if (event.keyCode === keyArrowLeft)
//                {
//                    fireArrowLeft = 0;
//                }
//                if (event.keyCode === keyArrowRight)
//                {
//                    fireArrowRight = 0;
//                }
//                if (event.keyCode === keyButton1)
//                {
//                    fireButton1 = 0;
//                }
//                if (event.keyCode === keyButton2)
//                {
//                    fireButton2 = 0;
//                }                                
//                if (event.keyCode === keyButtonStart)
//                {
//                    fireButtonStart = 0;
//                }
//            }
//    );

    if (fireArrowUp > 0)
    {
        gameArrowUp++;
        gameArrowUp = Math.min(maxVal_gameButton, gameArrowUp);
    } else
    {
        gameArrowUp = 0;
    }
    if (fireArrowDown > 0)
    {
        gameArrowDown++;
        gameArrowDown = Math.min(maxVal_gameButton, gameArrowDown);
    } else
    {
        gameArrowDown = 0;
    }
    if (fireArrowLeft > 0)
    {
        gameArrowLeft++;
        gameArrowLeft = Math.min(maxVal_gameButton, gameArrowLeft);
    } else
    {
        gameArrowLeft = 0;
    }
    if (fireArrowRight > 0)
    {
        gameArrowRight++;
        gameArrowRight = Math.min(maxVal_gameButton, gameArrowRight);
    } else
    {
        gameArrowRight = 0;
    }
    if (fireButton1 > 0)
    {
        gameButton1++;
        gameButton1 = Math.min(maxVal_gameButton, gameButton1);
    } else
    {
        gameButton1 = 0;
    }
    if (fireButton2 > 0)
    {
        gameButton2++;
        gameButton2 = Math.min(maxVal_gameButton, gameButton2);
    } else
    {
        gameButton2 = 0;
    }
    if (fireButtonStart > 0)
    {
        gameButtonStart++;
        gameButtonStart = Math.min(maxVal_gameButton, gameButtonStart);
    } else
    {
        gameButtonStart = 0;
    }

    debug_Escrever("id_debug_GameArrowUp", gameArrowUp);
    debug_Escrever("id_debug_GameArrowDown", gameArrowDown);
    debug_Escrever("id_debug_GameArrowRight", gameArrowRight);
    debug_Escrever("id_debug_GameArrowLeft", gameArrowLeft);

    debug_Escrever("id_debug_GameButton1", gameButton1);
    debug_Escrever("id_debug_GameButton2", gameButton2);

    debug_Escrever("id_debug_gameButtonStart", gameButtonStart);
    
    return;
}