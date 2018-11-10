
function gamply_run()
{
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
    var clickableObjects = document.getElementsByClassName('objcts_clickable');

    for (i = 0; i < clickableObjects.length; i++)
    {
        if (main_isMouseDown && (objts_isColliding(main_mouseColisor, clickableObjects[i])))
        {
            gamply_clickedObject = clickableObjects[i];
            main_isMouseDown = false;
            break;
        }
    }

    return;
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
    var originalX = 0;
    var originalY = 0;
    var toMoveX = 0;
    var toMoveY = 0;
    var distanceX = 0;
    var distanceY = 0;
    var directionX = 0;
    var directionY = 0;

    //definir os objetos a serem movidos
    for (i = 0; i < allMovmntGroupElements.length; i++)
    {
        oneMovmntGroupElement = allMovmntGroupElements[i];
//        linkedObjectId0 = document.getElementById(oneMovmntGroupElement.dataset.movement_linkedobject_id_0);
//        if (linkedObjectId0 == null)
//        {
//            objts_removeElement(oneMovmntGroupElement);
//            continue;
//        }

        toMoveX = parseInt(oneMovmntGroupElement.dataset.movement_tomove_x);
        toMoveY = parseInt(oneMovmntGroupElement.dataset.movement_tomove_y);
        originalX = parseInt(oneMovmntGroupElement.dataset.position_pos_x);
        originalY = parseInt(oneMovmntGroupElement.dataset.position_pos_y);
//        originalX = parseInt(oneMovmntGroupElement.style.left);
//        originalY = parseInt(oneMovmntGroupElement.style.top);
        distanceX = toMoveX - originalX;
        distanceY = toMoveY - originalY;

        if ((distanceX != 0) || (distanceY != 0))
        {
            allElementsToMove[(allElementsToMove.length)] = oneMovmntGroupElement;
            loopElementsToMove = Math.max(loopElementsToMove, Math.abs(distanceX), Math.abs(distanceY));
        }
    }

    //mover 'loopElementsToMove' vezes cada objeto por 1px
    for (i1 = loopElementsToMove; i1 > 0; i1--)
    {
        for (i2 = 0; i2 < allElementsToMove.length; i2++)
        {
            oneElementToMove = allElementsToMove[i2];

            toMoveX = parseInt(oneElementToMove.dataset.movement_tomove_x);
            toMoveY = parseInt(oneElementToMove.dataset.movement_tomove_y);
            originalX = parseInt(oneElementToMove.dataset.position_pos_x);
            originalY = parseInt(oneElementToMove.dataset.position_pos_y);
//            originalX = parseInt(oneElementToMove.style.left);
//            originalY = parseInt(oneElementToMove.style.top);
            distanceX = toMoveX - originalX;
            distanceY = toMoveY - originalY;

//            if ((distanceX == 0) && (distanceY == 0))
//            {
//                continue;
//            }
            if (distanceX != 0)
            {
                directionX = (distanceX / Math.abs(distanceX));
                originalX = (originalX + directionX);
                
                oneElementToMove.setAttribute('data-position_pos_x', (originalX+"px"));
                oneElementToMove.style.left = originalX + "px";                   
            }
            if (distanceY != 0)
            {
                directionY = (distanceY / Math.abs(distanceY));
                originalY = (originalY + directionY);
                
                oneElementToMove.setAttribute('data-position_pos_Y', (originalY+"px"));
                oneElementToMove.style.top = originalY + "px";
            }

        }
    }

    //atualizar posicao dos objetos ligados aos objetos que foram movidos
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


