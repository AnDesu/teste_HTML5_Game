
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
    
    contrls_Init();
};

function main_GameInit()
{
    document.getElementById("id_gameMainDiv").classList.remove("disply_none");
}


//############################
//### programing functions ###
//############################


