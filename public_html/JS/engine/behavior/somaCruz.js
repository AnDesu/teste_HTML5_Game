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
    oneObjctsSetUpElement.setAttribute("id", "somaCruz");
    oneObjctsSetUpElement.setAttribute('data-colisor_id', 'colsrs_somaCruz');
    oneObjctsSetUpElement.setAttribute('data-animation_id_n0', 'anmtn_somaCruz');
//    oneObjctsSetUpElement.setAttribute('data-movement_id_n0', 'movmnt_somaCruz');
    object_somaCruz = oneObjctsSetUpElement;
    colsrElement0 = document.getElementById(object_somaCruz.dataset.colisor_id);
    anmtnElement0 = document.getElementById(oneObjctsSetUpElement.dataset.animation_id_n0);

    elementHolder = anmtnElement0;
    elementHolder.setAttribute('data-frame_size', '65');
    elementHolder.setAttribute('data-animation_frame', '0');
    elementHolder.setAttribute('data-animation_last_frame', '4');
    elementHolder.setAttribute('data-animation_speed', '14');
    elementHolder.setAttribute('data-animation_number', '0');




    //set movement object
    node_movmntElement0.classList.add("movmnt_Group", "movmnt_somaCruz");
    node_movmntElement0.setAttribute("id", "movmnt_somaCruz");
    node_movmntElement0.setAttribute('data-movement_linkedobject_id_0', "somaCruz");
    node_movmntElement0.setAttribute('data-position_offset_x', '-21');
    node_movmntElement0.setAttribute('data-position_offset_y', '-23');
    node_movmntElement0.setAttribute('data-movement_tomove_x', '-1');
    node_movmntElement0.setAttribute('data-movement_tomove_y', '-1');

    node_movmntElement0.setAttribute('data-position_pos_x', document.getElementById(node_movmntElement0.dataset.movement_linkedobject_id_0).style.left);
    node_movmntElement0.setAttribute('data-position_pos_y', document.getElementById(node_movmntElement0.dataset.movement_linkedobject_id_0).style.top);
    node_movmntElement0.setAttribute('data-movement_time_0', '0');
    node_movmntElement0.style.left = 0 + "px";
    node_movmntElement0.style.top = 0 + "px";
    movmntElement0 = node_movmntElement0;
    
    // debug movement
    node_movmntElement0.addEventListener("click", debug_selectObject);
    
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
    gameplay_movmnt_somaCruz();
    gameplay_anmtns_somaCruz();
    
    return;
}

function gameplay_movmnt_somaCruz()
{
    if (movmntElement0 == null)
    {
        return;
    }
    
    movmntElement0.setAttribute('data-position_pos_x', document.getElementById(movmntElement0.dataset.movement_linkedobject_id_0).style.left);
    movmntElement0.setAttribute('data-position_pos_y', document.getElementById(movmntElement0.dataset.movement_linkedobject_id_0).style.top);

    if (gameArrowUp > 0)
    {
        movmntElement0.dataset.movement_tomove_y = (parseInt(movmntElement0.dataset.position_pos_y) - 3) + "px";
    }
    if (gameArrowDown > 0)
    {
        movmntElement0.dataset.movement_tomove_y = (parseInt(movmntElement0.dataset.position_pos_y) + 3) + "px";
    }
    if (gameArrowRight > 0)
    {
        movmntElement0.dataset.movement_tomove_x = (parseInt(movmntElement0.dataset.position_pos_x) + 3) + "px";
    }
    if (gameArrowLeft > 0)
    {
        movmntElement0.dataset.movement_tomove_x = (parseInt(movmntElement0.dataset.position_pos_x) - 3) + "px";
    }
    
    return;
}

function gameplay_anmtns_somaCruz()
{
     if (gameArrowUp == 1 || gameArrowDown == 1)
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 2);
    }
    if (gameArrowRight == 1 || gameArrowLeft == 1)
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 1);
    }  
    
    if( ( parseInt(movmntElement0.dataset.position_pos_x) == parseInt(movmntElement0.dataset.movement_tomove_x) ) && ( parseInt(movmntElement0.dataset.position_pos_y) != parseInt(movmntElement0.dataset.movement_tomove_y) ) )
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 2);
    }
    if( ( parseInt(movmntElement0.dataset.position_pos_x) != parseInt(movmntElement0.dataset.movement_tomove_x) ) && ( parseInt(movmntElement0.dataset.position_pos_y) == parseInt(movmntElement0.dataset.movement_tomove_y) ) )
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 1);
    }
    if( ( parseInt(movmntElement0.dataset.position_pos_x) == parseInt(movmntElement0.dataset.movement_tomove_x) ) && ( parseInt(movmntElement0.dataset.position_pos_y) == parseInt(movmntElement0.dataset.movement_tomove_y) ) )
    {
        anmtns_changAnmtns_somaCruz(anmtnElement0, 0);
    }
}