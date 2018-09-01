function removeElement(element) {
    element && element.parentNode && element.parentNode.removeChild(element);
}

//###############
//### Colisao ###
//###############

function collision(obj1, obj2) {
    var rect1 = obj1.getBoundingClientRect();
    var rect2 = obj2.getBoundingClientRect();

    var overlap = !(rect1.right < rect2.left ||
            rect1.left > rect2.right ||
            rect1.bottom < rect2.top ||
            rect1.top > rect2.bottom);

    debug_escrever("result", overlap);
}