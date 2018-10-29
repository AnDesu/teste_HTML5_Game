//###############
//### actions ###
//###############

function gamply_doActions()
{
    //Mostrar Debug Menu
    if (gameButton1 == 1)
    {
        debugOnState++;
        debug_SetVisible();
    }


//    gameplay_somaCruz();

    gameplay_movmnt_Sine0();

}

//################
//### movement ###
//################

function gamply_doMovement()
{
    var allMovmntGroupElements = document.getElementsByClassName("movmnt_Group");
    var oneMovmntGroupElement = null;
    var linkedObjectId0 = null;
    var toMove = null;

    for (i = 0; i < allMovmntGroupElements.length; i++)
    {
        oneMovmntGroupElement = allMovmntGroupElements[i];
        linkedObjectId0 = document.getElementById(oneMovmntGroupElement.dataset.movement_linkedobject_id_0);
        if (linkedObjectId0 == null)
        {
            objts_removeElement(oneMovmntGroupElement);
            continue;
        }

//        toMove = parseInt(oneMovmntGroupElement.dataset.movement_tomove_x);
//        if (toMove > -1)
//        {
//            oneMovmntGroupElement.style.left = toMove + "px";
//        }
//        toMove = parseInt(oneMovmntGroupElement.dataset.movement_tomove_y);
//        if (toMove > -1)
//        {
//            oneMovmntGroupElement.style.top = toMove + "px";
//        }









//        if ((parseInt(oneMovmntGroupElement.dataset.movement_tomove_x) != parseInt(oneMovmntGroupElement.style.left)) || (parseInt(oneMovmntGroupElement.dataset.movement_tomove_y) != parseInt(oneMovmntGroupElement.style.top)))
//        {
//            gamply_moveByOnePx(parseInt(oneMovmntGroupElement.dataset.movement_tomove_x), parseInt(oneMovmntGroupElement.dataset.movement_tomove_y), oneMovmntGroupElement, parseInt(oneMovmntGroupElement.style.left), parseInt(oneMovmntGroupElement.style.top));
//        }

        if ((parseInt(oneMovmntGroupElement.dataset.movement_tomove_x) != parseInt(oneMovmntGroupElement.style.left)) || (parseInt(oneMovmntGroupElement.dataset.movement_tomove_y) != parseInt(oneMovmntGroupElement.style.top)))
        {
            var toMoveX = parseInt(oneMovmntGroupElement.dataset.movement_tomove_x);
            var toMoveY = parseInt(oneMovmntGroupElement.dataset.movement_tomove_y);
            var originalX = parseInt(oneMovmntGroupElement.style.left);
            var originalY = parseInt(oneMovmntGroupElement.style.top);

//            alert("dentro: " + toMoveX + " ; " + toMoveY + " - " + oneMovmntGroupElement + " - " + originalX + " ; " + originalY);

            var directionX = 0;
            var directionY = 0;
            var distanceX = toMoveX - originalX;
//            alert("distX" + distanceX);
            var distanceY = toMoveY - originalY;
//            alert("distY" + distanceY);



            if (distanceX != 0)
            {
                directionX = (distanceX / Math.abs(distanceX));
//                alert("dirx" + directionX);
            }
            if (distanceY != 0)
            {
                directionY = (distanceY / Math.abs(distanceY));
//                alert("diry" + directionY);
            }

            for (i = (Math.abs(distanceX) + Math.abs(distanceY)); i > 0; i--)
            {
//                alert("for: " + toMoveX + " ; " + toMoveY + " | " + i + " | " + originalX + " ; " + originalY);
                
                if (distanceX != 0)
                {
                    originalX = (parseInt(oneMovmntGroupElement.style.left) + directionX);
                    oneMovmntGroupElement.style.left = originalX + "px";
                    distanceX = distanceX - directionX;
                }
                if (distanceY != 0)
                {
                    originalY = (parseInt(oneMovmntGroupElement.style.top) + directionY);
                    oneMovmntGroupElement.style.top = originalY + "px";
                    distanceY = distanceY - directionY;
                }
            }


        }













//        alert("voltou");
        linkedObjectId0.style.left = oneMovmntGroupElement.style.left;
        linkedObjectId0.style.top = oneMovmntGroupElement.style.top;
    }
}

function gamply_moveByOnePx(toMoveX, toMoveY, oneMovmntGroupElement, originalX, originalY)
{
    alert("gamply_moveByOnePx: " + toMoveX + " ; " + toMoveY + " - " + oneMovmntGroupElement + " - " + originalX + " ; " + originalY);

    var directionX = 0;
    var directionY = 0;
    var distanceX = toMoveX - originalX;
    alert("distX" + distanceX);
    var distanceY = toMoveY - originalY;
    alert("distY" + distanceY);



    if (distanceX != 0)
    {
        directionX = (distanceX / Math.abs(distanceX));
        alert("dirx" + directionX);
    }
    if (distanceY != 0)
    {
        directionY = (distanceY / Math.abs(distanceY));
        alert("diry" + directionY);
    }

    for (i = (Math.abs(distanceX) + Math.abs(distanceY)); i > 0; i--)
    {
        if (distanceX != 0)
        {
            originalX = (parseInt(oneMovmntGroupElement.style.left) + directionX);
            oneMovmntGroupElement.style.left = originalX + "px";
            distanceX = distanceX - directionX;
        }
        if (distanceY != 0)
        {
            originalY = (parseInt(oneMovmntGroupElement.style.top) + directionY);
            oneMovmntGroupElement.style.top = originalY + "px";
            distanceY = distanceY - directionY;
        }
    }
    return;
}

function REC_gamply_moveByOnePx(toMoveX, toMoveY, oneMovmntGroupElement, originalX, originalY)
{
//    alert("gamply_moveByOnePx: "+toMoveX+" ; "+ toMoveY + " - " + oneMovmntGroupElement + " - " + originalX + " ; " + originalY);

    var directionX = 0;
    var directionY = 0;
    var distanceX = toMoveX - originalX;
//    alert("distX" +distanceX);
    var distanceY = toMoveY - originalY;
//    alert("distY" +distanceY);



    if (distanceX != 0)
    {
        directionX = (distanceX / Math.abs(distanceX));
//        alert("dirx" +directionX);
    }
    if (distanceY != 0)
    {
        directionY = (distanceY / Math.abs(distanceY));
//        alert("diry" +directionY);
    }

    if (directionX != 0)
    {
        originalX = (parseInt(oneMovmntGroupElement.style.left) + directionX);
        oneMovmntGroupElement.style.left = originalX + "px";
    }
    if (directionY != 0)
    {
        originalY = (parseInt(oneMovmntGroupElement.style.top) + directionY);
        oneMovmntGroupElement.style.top = originalY + "px";
    }

//    alert("absX " + Math.abs(toMoveX));
//    alert("absY " + Math.abs(toMoveY));
    if ((Math.abs(toMoveX) + Math.abs(toMoveY)) > 0)
    {
//        alert("absResult " + (Math.abs(toMoveX) + Math.abs(toMoveY)) );
//        alert("reChamar: "+toMoveX+" ; "+ toMoveY + " - " + oneMovmntGroupElement + " - " + originalX + " ; " + originalY);
        gamply_moveByOnePx(toMoveX, toMoveY, oneMovmntGroupElement, originalX, originalY);
    }
    else
    {
        alert("no");
        alert((Math.abs(toMoveX) + Math.abs(toMoveY)));
        return;
    }
}