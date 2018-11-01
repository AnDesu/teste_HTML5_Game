var movment360 = 1;

function gameplay_movmnt_Sine0() {
    var allMovmntSine0Elements = document.getElementsByClassName("movmnt_Sine0");
    var oneMovmntSine0Element = null;
    var linkedObjectId0 = null;

    for (i = 0; i < allMovmntSine0Elements.length; i++)
    {
        oneMovmntSine0Element = allMovmntSine0Elements[i];
        linkedObjectId0 = document.getElementById(oneMovmntSine0Element.dataset.movement_linkedobject_id_0);
        if (linkedObjectId0 == null)
        {
            objts_removeElement(oneMovmntSine0Element);
            continue;
        }

//        oneMovmntSine0Element.dataset.movement_time_0 = ((Math.sin((globalAnimationFrame / 1) %360) ) *1);
        oneMovmntSine0Element.dataset.movement_time_0 = movment360;

//        oneMovmntSine0Element.dataset.position_pos_x = parseInt(oneMovmntSine0Element.dataset.position_pos_x)+ 0 + "px";
//        oneMovmntSine0Element.dataset.position_pos_y = 100 + ((Math.sin((globalAnimationFrame / 18) %360) ) *10) + "px";











        oneMovmntSine0Element.dataset.movement_tomove_x = parseInt(oneMovmntSine0Element.dataset.position_pos_x) + ((Math.cos((globalAnimationFrame / 18) % 360)) * 10) + "px";
        oneMovmntSine0Element.dataset.movement_tomove_y = parseInt(oneMovmntSine0Element.dataset.position_pos_y) + ((Math.sin((globalAnimationFrame / 18) % 360)) * 10) + "px";        




//        oneMovmntSine0Element.style.left = parseInt(oneMovmntSine0Element.dataset.position_pos_x) + ((Math.cos((globalAnimationFrame / 18) % 360)) * 10) + "px";
//        oneMovmntSine0Element.style.top = parseInt(oneMovmntSine0Element.dataset.position_pos_y) + ((Math.sin((globalAnimationFrame / 18) % 360)) * 10) + "px";
//        linkedObjectId0.style.left = oneMovmntSine0Element.style.left;
//        linkedObjectId0.style.top = oneMovmntSine0Element.style.top;
    }

    movment360 = (movment360 + 1) % 360;
    
    return;
}