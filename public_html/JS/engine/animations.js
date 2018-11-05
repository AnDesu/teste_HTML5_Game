
var globalAnimationFrame = 0;



function anmtns_doAnimations()
{
    globalAnimationFrame = (globalAnimationFrame + 1) % 100000;

    var allAnimationElements = document.getElementsByClassName("anmtn_Group");
    var oneAnimationElement = null;    
    for (i = 0; i < allAnimationElements.length; i++)
    {
        oneAnimationElement = allAnimationElements[i];

        //Animation frame
        var marginTopValue = ((Math.floor(globalAnimationFrame / parseInt(oneAnimationElement.dataset.animation_speed))) % parseInt(oneAnimationElement.dataset.animation_last_frame)) * (0 - parseInt(oneAnimationElement.dataset.frame_size));
        
        //Animation number
        var marginLeftValue = 0 - (parseInt(oneAnimationElement.dataset.frame_size) * parseInt(oneAnimationElement.dataset.animation_number));

        oneAnimationElement.style.marginTop = marginTopValue + "px";
        oneAnimationElement.style.marginLeft = marginLeftValue + "px";
    }
    
    return;
}