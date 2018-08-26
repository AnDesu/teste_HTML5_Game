//STH_Ring.gif
function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hello World!";
}

var animationFrame = 0;
var maring = -16;
function doAnimations()
{
    animationFrame = animationFrame + 0.5;
    if (animationFrame === 1.5)
    {
        var x = document.getElementsByClassName("sth_ring");
        var y = x[0].getElementsByTagName('img');
//        alert(maring);
        y[0].style.marginTop = maring+"px";
        maring = maring - 16;
        if(maring < -48)
        {
            maring = 0;
        }
        animationFrame = 0;
    }

//    x[0].style.paddingTop = "10px";

}