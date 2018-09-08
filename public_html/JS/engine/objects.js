
//#################
//### Functions ###
//#################

function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}



//###############
//### Colisao ###
//###############

function objts_collision(obj1, obj2) {
    var rect1 = obj1.getBoundingClientRect();
    var rect2 = obj2.getBoundingClientRect();

    var overlap = !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);

    debug_Escrever("id_debug_CollisionResult", overlap);
}



//#####################
//### Objects setUp ###
//#####################

function objcts_Init()
{
    var allObjctsSetUpElements = document.getElementsByClassName("objcts_setUp");
    var oneObjctsSetUpElement = null;
    for (i = 0; i < allObjctsSetUpElements.length; i++)
    {
        oneObjctsSetUpElement = allObjctsSetUpElements[i];

        if (oneObjctsSetUpElement.classList.contains("anmtn_sthRing"))
        {
            objcts_Init_sthRing(oneObjctsSetUpElement);
            continue;
        }
    }
}

function objcts_Init_sthRing(oneObjctsSetUpElement)
{
    oneObjctsSetUpElement.innerHTML = '<img src="IMG/STH_Ring.gif">';

    oneObjctsSetUpElement.setAttribute('data-frame_size', '16');
    oneObjctsSetUpElement.setAttribute('data-animation_frame', '0');
    oneObjctsSetUpElement.setAttribute('data-animation_last_frame', '4');
    oneObjctsSetUpElement.setAttribute('data-animation_speed', '2');

    oneObjctsSetUpElement.classList.add("anmtn_Group", "movmnt_Group");

    oneObjctsSetUpElement.style.top = 100 + Math.floor(Math.random() * 101)*3 +  "px";
}