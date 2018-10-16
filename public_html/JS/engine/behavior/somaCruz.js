//############
//### init ###
//############

var object_somaCruz = null;
var anmtnElement0 = null;
var movmntElement0 = null;
var colsrElement0 = null;

function objcts_Init_somaCruz(oneObjctsSetUpElement)
{
    //  debug start position
    
    oneObjctsSetUpElement.style.left = "650px";
    oneObjctsSetUpElement.style.top = "250px";


    //create elements
    
    var elementHolder = null;
    
    oneObjctsSetUpElement.innerHTML =
            '<img id="anmtn_somaCruz" class="anmtn_Group" src="IMG/engine_somaCruz.png">'
            + '<div id="colsrs_somaCruz" class="colsrs_Group colsrs_somaCruz"></div>'
            ;
    var node_movmntElement0 = document.createElement('div');
    oneObjctsSetUpElement.after(node_movmntElement0);
    
    
    
    //set attributes
    
    oneObjctsSetUpElement.setAttribute('data-colisor_id', 'colsrs_somaCruz');
    oneObjctsSetUpElement.setAttribute('data-animation_id_n0', 'anmtn_somaCruz');
    oneObjctsSetUpElement.setAttribute('data-movement_id_n0', 'movmnt_somaCruz');

    elementHolder = document.getElementById(oneObjctsSetUpElement.dataset.animation_id_n0);
    elementHolder.setAttribute('data-frame_size', '65');
    elementHolder.setAttribute('data-animation_frame', '0');
    elementHolder.setAttribute('data-animation_last_frame', '4');
    elementHolder.setAttribute('data-animation_speed', '14');
    elementHolder.setAttribute('data-animation_number', '0');
    
    node_movmntElement0.classList.add("movmnt_Group");
    node_movmntElement0.setAttribute("id", "movmnt_somaCruz");
    node_movmntElement0.setAttribute('data-position_offset_x', '-21');
    node_movmntElement0.setAttribute('data-position_offset_y', '-23');
    node_movmntElement0.setAttribute('data-movement_tomove_x', '-1');
    node_movmntElement0.setAttribute('data-movement_tomove_y', '-1');
    
    node_movmntElement0.style.left = oneObjctsSetUpElement.style.left;
    node_movmntElement0.style.top = oneObjctsSetUpElement.style.top;
    // debug movement
    node_movmntElement0.addEventListener("click", debug_selectObject);

    object_somaCruz = oneObjctsSetUpElement;
    anmtnElement0 = document.getElementById(object_somaCruz.dataset.animation_id_n0);
    movmntElement0 = document.getElementById(object_somaCruz.dataset.movement_id_n0);
    colsrElement0 = document.getElementById(object_somaCruz.dataset.colisor_id);
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
    //mudar animacao
    
    if (gameArrowUp == 1 || gameArrowDown == 1)
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 2);
    }
    if (gameArrowRight == 1 || gameArrowLeft == 1)
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 1);
    }
    if (gameArrowRight == 0 && gameArrowLeft == 0 && gameArrowUp == 0 && gameArrowDown == 0)
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 0);
    }



    //movimentar
    
    if (gameArrowUp > 0)
    {
        movmntElement0.style.top = (parseInt(movmntElement0.style.top) - 3) + "px";
    }
    if (gameArrowDown > 0)
    {
        movmntElement0.style.top = (parseInt(movmntElement0.style.top) + 3) + "px";
    }
    if (gameArrowRight > 0)
    {
        movmntElement0.style.left = (parseInt(movmntElement0.style.left) + 3) + "px";
    }
    if (gameArrowLeft > 0)
    {
        movmntElement0.style.left = (parseInt(movmntElement0.style.left) - 3) + "px";
    }

    object_somaCruz.style.top = parseInt(movmntElement0.style.top) + parseInt(movmntElement0.dataset.position_offset_y) + "px";
    object_somaCruz.style.left = parseInt(movmntElement0.style.left) + parseInt(movmntElement0.dataset.position_offset_x) + "px";



    //interagir STH_Ring
    
    if (typeof Count_STH_Ring != "undefined")
    {
        var allSTH_Ring = Active_STH_Ring;


        for (i = 0; i < allSTH_Ring.length; i++)
        {
            var oneSTH_Ring = allSTH_Ring[i];
            if (objts_isColliding(document.getElementById(oneSTH_Ring.dataset.colisor_id), colsrElement0))
            {
                objts_removeElement_sthRing(oneSTH_Ring);
            }


        }
    }

}

