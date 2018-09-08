
//#################
//### main loop ###
//#################

var main_isGameSoftPaused = false;
window.setInterval(function () {
    contrls_getControls();
    gamply_doActions();

    if (!main_isGameSoftPaused)
    {
        anmtns_doAnimations();
    }

    objts_collision(document.getElementById("div1"), document.getElementById("div2"));
}, 60);



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
