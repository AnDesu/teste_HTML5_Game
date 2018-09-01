
//#################
//### main loop ###
//#################

window.setInterval(function () {
    getControls();
    doAnimations();
    doActions();
    

    collision(document.getElementById("div1"), document.getElementById("div2"));
}, 60);



//######################
//### start of frame ###
//######################

window.onload = function() {
  debugInit();
  gameInit();
  
  animationsInit();
};

function gameInit()
{
    document.getElementById("gameMainDiv").style.display = "inline";
}


//############################
//### programing functions ###
//############################
