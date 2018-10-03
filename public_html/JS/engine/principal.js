
//#################
//### main loop ###
//#################

var main_fps = 16.66;
var main_isAnimationtPaused = false;
window.setInterval(function () {
    debug_run();

    contrls_getControls();
    gamply_doActions();
    
    objts_getActiveObjects();

    if (!main_isAnimationtPaused)
    {
        anmtns_doAnimations();
    }

    objts_isColliding(document.getElementById("div1"), document.getElementById("div2"));
}, main_fps);



//######################
//### start of frame ###
//######################

window.onload = function () {
    debug_Init();
    main_GameInit();

    objcts_Init();
};

function main_GameInit()
{
    document.getElementById("id_gameMainDiv").classList.remove("disply_none");
}


//############################
//### programing functions ###
//############################

var main_mousePosX = 0;
var main_mousePosY = 0;
document.onmousemove = function (event) {
    main_mousePosX = event.clientX;
    main_mousePosY = event.clientY;
};

var main_isMouseDown = false;
document.body.onmousedown = function () {
    main_isMouseDown = true;
};
document.body.onmouseup = function () {
    main_isMouseDown = false;
};