
function animationsInit()
{
    var allAnimationElements = document.getElementsByClassName("animationGroup");
    for (i = 0; i < allAnimationElements.length; i++)
    {
        var oneAnimationElement = allAnimationElements[i];
        
        //STH_Ring.gif
        if(oneAnimationElement.classList.contains("sth_ring"))
        {
            oneAnimationElement.innerHTML = '<img src="IMG/STH_Ring.gif">';
            oneAnimationElement.setAttribute('data-frame_size', '16');            
            oneAnimationElement.setAttribute('data-animation_frame', '0');
            oneAnimationElement.setAttribute('data-animation_last_frame', '4');
            oneAnimationElement.setAttribute('data-animation_speed', '2');
        }
    }
}

var globalAnimationFrame = 0;
function doAnimations()
{
    globalAnimationFrame = (globalAnimationFrame+1)%100000;
    
    var allAnimationElements = document.getElementsByClassName("animationGroup");
    for (i = 0; i < allAnimationElements.length; i++)
    {
        var oneAnimationElement = allAnimationElements[i];
        var elementGraphic = oneAnimationElement.getElementsByTagName('img');
        
        var marginTopValue = ((Math.floor(globalAnimationFrame/parseInt(oneAnimationElement.dataset.animation_speed)))%parseInt(oneAnimationElement.dataset.animation_last_frame))*(0-parseInt(oneAnimationElement.dataset.frame_size));
        elementGraphic[0].style.marginTop =  marginTopValue +"px";
    }
}