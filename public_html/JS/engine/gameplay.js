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


    gameplay_somaCruz();

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
        
        toMove = parseInt(oneMovmntGroupElement.dataset.movement_tomove_x);
        if(toMove > -1)
        {
            oneMovmntGroupElement.style.left = toMove + "px";
        }
        toMove = parseInt(oneMovmntGroupElement.dataset.movement_tomove_y);
        if(toMove > -1)
        {
            oneMovmntGroupElement.style.top = toMove + "px";
        }
        linkedObjectId0.style.left = oneMovmntGroupElement.style.left;
        linkedObjectId0.style.top = oneMovmntGroupElement.style.top;
    }
}