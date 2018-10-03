
//#################
//### Functions ###
//#################

function objts_removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}



//###############
//### Colisao ###
//###############

function objts_isColliding(obj1, obj2) {
    var rect1 = obj1.getBoundingClientRect();
    var rect2 = obj2.getBoundingClientRect();

    var overlap = !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);

    debug_Escrever("id_debug_CollisionResult", overlap);
    
    return overlap;
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
        if (oneObjctsSetUpElement.classList.contains("anmtn_somaCruz"))
        {
            objcts_Init_somaCruz(oneObjctsSetUpElement);
            continue;
        }
    }
}



//######################
//### Active Objects ###
//######################

var isActivatingObjects = false;
function objts_getActiveObjects()
{
    if (typeof Count_STH_Ring != "undefined")
    {
        Active_STH_Ring.length = 0;
    }
    
    
    var allObjctsActive = document.getElementsByClassName("actv_Group"); 
    for (i = 0; i < allObjctsActive.length; i++)
    {
        if( !(objts_isColliding(allObjctsActive[i], document.getElementById("gameActiveArea"))) )
        {
            continue;
        }
        
        if (allObjctsActive[i].classList.contains("anmtn_sthRing"))
        {
            objcts_setActive_sthRing(allObjctsActive[i]);
            continue;
        }
    }             
}