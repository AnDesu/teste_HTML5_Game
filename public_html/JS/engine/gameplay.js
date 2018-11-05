
function gamply_run()
{
    //Mostrar Debug Menu
    if (gameButton1 == 1)
    {
        debugOnState++;
        debug_SetVisible();
    }

    gamply_callActions();
    gamply_callMovements();

    gamply_doMovement();

    return;
}



//###############
//### actions ###
//###############

function gamply_callActions()
{
    gamply_doMouseActions();

    if (!main_isAnimationtPaused)
    {
        gameplay_somaCruz();
    }
}

var gamply_clickedObject = null;
function gamply_doMouseActions()
{
    gamply_clickedObject = null
    var clickbleObjects = document.getElementsByClassName('objcts_clickable');
    for (i = 0; i < clickbleObjects.length; i++)
    {
        if (main_isMouseDown && (objts_isColliding(main_mouseColisor, clickbleObjects[i])))
        {            
            gamply_clickedObject = clickbleObjects[i];
//            debug_Alert("sadfhsaf"+gamply_clickedObject.id);
            main_isMouseDown = false;
            break;
        }
    }
}

//################
//### movement ###
//################

function gamply_callMovements()
{
    gameplay_movmnt_Sine0();
}
function gamply_doMovement()
{
    var allMovmntGroupElements = document.getElementsByClassName("movmnt_Group");
    var oneMovmntGroupElement = null;
    var linkedObjectId0 = null;

    var allElementsToMove = [];
    var oneElementToMove = null;
    var loopElementsToMove = 0;
    var toMoveX = 0;
    var toMoveY = 0;
    var originalX = 0;
    var originalY = 0;
    var directionX = 0;
    var directionY = 0;
    var distanceX = 0;
    var distanceY = 0;

    for (i = 0; i < allMovmntGroupElements.length; i++)
    {
        oneMovmntGroupElement = allMovmntGroupElements[i];
        linkedObjectId0 = document.getElementById(oneMovmntGroupElement.dataset.movement_linkedobject_id_0);
        if (linkedObjectId0 == null)
        {
            objts_removeElement(oneMovmntGroupElement);
            continue;
        }

        toMoveX = parseInt(oneMovmntGroupElement.dataset.movement_tomove_x);
        toMoveY = parseInt(oneMovmntGroupElement.dataset.movement_tomove_y);
        originalX = parseInt(oneMovmntGroupElement.style.left);
        originalY = parseInt(oneMovmntGroupElement.style.top);
        distanceX = toMoveX - originalX;
        distanceY = toMoveY - originalY;

        if ((distanceX != 0) || (distanceY != 0))
        {
            allElementsToMove[(allElementsToMove.length)] = oneMovmntGroupElement;
            loopElementsToMove = Math.max(loopElementsToMove, Math.abs(distanceX), Math.abs(distanceY));
        }
    }

    for (i1 = loopElementsToMove; i1 > 0; i1--)
    {
        for (i2 = 0; i2 < allElementsToMove.length; i2++)
        {
            oneElementToMove = allElementsToMove[i2];

            toMoveX = parseInt(oneElementToMove.dataset.movement_tomove_x);
            toMoveY = parseInt(oneElementToMove.dataset.movement_tomove_y);
            originalX = parseInt(oneElementToMove.style.left);
            originalY = parseInt(oneElementToMove.style.top);
            distanceX = toMoveX - originalX;
            distanceY = toMoveY - originalY;

            if ((distanceX == 0) && (distanceY == 0))
            {
                continue;
            }
            if (distanceX != 0)
            {
                directionX = (distanceX / Math.abs(distanceX));
                oneElementToMove.style.left = (parseInt(oneElementToMove.style.left) + directionX) + "px";
            }
            if (distanceY != 0)
            {
                directionY = (distanceY / Math.abs(distanceY));
                oneElementToMove.style.top = (parseInt(oneElementToMove.style.top) + directionY) + "px";
            }

        }



    }

    for (i3 = 0; i3 < allElementsToMove.length; i3++)
    {
        linkedObjectId0 = document.getElementById(allElementsToMove[i3].dataset.movement_linkedobject_id_0);
        linkedObjectId0.style.left = allElementsToMove[i3].style.left;
        linkedObjectId0.style.top = allElementsToMove[i3].style.top;
    }

    //mouse movement
    document.getElementById("colsrs_mouse").style.left = main_mousePosX + "px";
    document.getElementById("colsrs_mouse").style.top = main_mousePosY + "px";

    return;
}


