//############
//### init ###
//############

var object_somaCruz = null;

function objcts_Init_somaCruz(oneObjctsSetUpElement)
{
    oneObjctsSetUpElement.innerHTML =
            '<img class="" src="IMG/engine_somaCruz.png">'
            + '<div id="colsrs_somaCruz" class="colsrs_Group colsrs_somaCruz"></div>';

    oneObjctsSetUpElement.setAttribute('data-frame_size', '65');
    oneObjctsSetUpElement.setAttribute('data-animation_frame', '0');
    oneObjctsSetUpElement.setAttribute('data-animation_last_frame', '4');
    oneObjctsSetUpElement.setAttribute('data-animation_speed', '14');
    oneObjctsSetUpElement.setAttribute('data-animation_number', '0');

    oneObjctsSetUpElement.classList.add("anmtn_Group", "movmnt_Group");

    oneObjctsSetUpElement.setAttribute('data-colisor_id', 'colsrs_somaCruz');

    oneObjctsSetUpElement.style.left = "650px";
    oneObjctsSetUpElement.style.top = "250px";

    object_somaCruz = oneObjctsSetUpElement;
}



//##################
//### animations ###
//##################

function anmtns_changAnmtns_somaCruz(anmtn_object, number)
{
    anmtn_object.setAttribute('data-animation_number', number);

    if (number == 0)
    {
        anmtn_object.setAttribute('data-animation_last_frame', '4');
        anmtn_object.setAttribute('data-animation_speed', '14');
        return;
    }
    if (number == 1)
    {
        anmtn_object.setAttribute('data-animation_last_frame', '4');
        anmtn_object.setAttribute('data-animation_speed', '9');
        return;
    }
    if (number == 2)
    {
        anmtn_object.setAttribute('data-animation_last_frame', '3');
        anmtn_object.setAttribute('data-animation_speed', '11');
        return;
    }
}



//################
//### gameplay ###
//################

function gameplay_somaCruz()
{
    //mover
    if (gameArrowUp == 1 || gameArrowDown == 1)
    {
        anmtns_changAnmtns_somaCruz(object_somaCruz, 2);
    }
    if (gameArrowRight == 1 || gameArrowLeft == 1)
    {
        anmtns_changAnmtns_somaCruz(object_somaCruz, 1);
    }
    if (gameArrowRight == 0 && gameArrowLeft == 0 && gameArrowUp == 0 && gameArrowDown == 0)
    {
        anmtns_changAnmtns_somaCruz(object_somaCruz, 0);
    }

    if (gameArrowUp > 0)
    {
        object_somaCruz.style.top = (parseInt(object_somaCruz.style.top) - 3) + "px";
    }
    if (gameArrowDown > 0)
    {
        object_somaCruz.style.top = (parseInt(object_somaCruz.style.top) + 3) + "px";
    }
    if (gameArrowRight > 0)
    {
        object_somaCruz.style.left = (parseInt(object_somaCruz.style.left) + 3) + "px";
    }
    if (gameArrowLeft > 0)
    {
        object_somaCruz.style.left = (parseInt(object_somaCruz.style.left) - 3) + "px";
    }

    //interagir STH_Ring
    if (typeof Count_STH_Ring != "undefined")
    {
        var allSTH_Ring = Active_STH_Ring;

        for (i = 0; i < allSTH_Ring.length; i++)
        {
            var oneSTH_Ring = allSTH_Ring[i];
            if (objts_isColliding(document.getElementById(oneSTH_Ring.dataset.colisor_id), document.getElementById(object_somaCruz.dataset.colisor_id)))
            {
                objts_removeElement_sthRing(oneSTH_Ring);
            }


        }
    }

}

