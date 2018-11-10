
function gameplay_movmnt_Sine0() {
    var allMovmntSine0Elements = document.getElementsByClassName("movmnt_Sine0");
    var oneMovmntSine0Element = null;

    for (i = 0; i < allMovmntSine0Elements.length; i++)
    {
        oneMovmntSine0Element = allMovmntSine0Elements[i];

        if (typeof oneMovmntSine0Element.dataset.movmnt_starting_x == "undefined")
        {
            oneMovmntSine0Element.dataset.movmnt_starting_x = oneMovmntSine0Element.dataset.position_pos_x;
            oneMovmntSine0Element.dataset.movmnt_starting_y = oneMovmntSine0Element.dataset.position_pos_y;
        }

        oneMovmntSine0Element.dataset.movement_tomove_x = parseInt(oneMovmntSine0Element.dataset.movmnt_starting_x) + ((Math.cos((globalAnimationFrame / 18) % 360)) * 10) + "px";
        oneMovmntSine0Element.dataset.movement_tomove_y = parseInt(oneMovmntSine0Element.dataset.movmnt_starting_y) + ((Math.sin((globalAnimationFrame / 18) % 360)) * 10) + "px";
    }

    return;
}