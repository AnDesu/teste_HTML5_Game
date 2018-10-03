


var globalAnimationFrame = 0;
function anmtns_doAnimations()
{
    globalAnimationFrame = (globalAnimationFrame + 1) % 100000;

    var allAnimationElements = document.getElementsByClassName("anmtn_Group");
    for (i = 0; i < allAnimationElements.length; i++)
    {
        var oneAnimationElement = allAnimationElements[i];
        var elementGraphic = oneAnimationElement.getElementsByTagName('img');
        if (elementGraphic[0] == null)
        {
            continue;
        }

        var marginTopValue = ((Math.floor(globalAnimationFrame / parseInt(oneAnimationElement.dataset.animation_speed))) % parseInt(oneAnimationElement.dataset.animation_last_frame)) * (0 - parseInt(oneAnimationElement.dataset.frame_size));
        var marginLeftValue = 0 - (parseInt(oneAnimationElement.dataset.frame_size) * parseInt(oneAnimationElement.dataset.animation_number));
        for (i1 = 0; i1 < elementGraphic.length; i1++)
        {
            elementGraphic[i1].style.marginTop = marginTopValue + "px";
            elementGraphic[i1].style.marginLeft = marginLeftValue + "px";
        }

    }
}