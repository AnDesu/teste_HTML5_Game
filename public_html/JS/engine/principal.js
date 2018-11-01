
//#################
//### main loop ###
//#################

var main_fps = 16.66;

//main variables
var main_isAnimationtPaused = false;

window.setInterval(function () {
    debug_run();

    contrls_getControls();
    
    gamply_doActions();
    gamply_doMovement();
    
    objts_getActiveObjects();

    if (!main_isAnimationtPaused)
    {
        anmtns_doAnimations();
    }



//    debug
    objts_isColliding(document.getElementById("div1"), document.getElementById("div2"));
    
    return;
}, main_fps);



//######################
//### start of frame ###
//######################

window.onload = function () {
    debug_Init();
    
    main_GameInit();

    objcts_Init();    
    contrls_Init();
    
    return;
};

function main_GameInit()
{
    document.getElementById("id_gameMainDiv").classList.remove("disply_none");
    
    return;
}


//############################
//### programing functions ###
//############################


