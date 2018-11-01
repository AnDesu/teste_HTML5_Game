var Count_STH_Ring = 0;
var Active_STH_Ring = [];

function objcts_Init_sthRing(oneObjctsSetUpElement)
{    
    //debug
    oneObjctsSetUpElement.style.left = 100 + Math.floor(Math.random() * 101) * 3 + "px";
    oneObjctsSetUpElement.style.top = 100 + Math.floor(Math.random() * 101) * 3 + "px";
    
    
    
    var elementHolder = null;
    
    oneObjctsSetUpElement.innerHTML =
            '<img  id="anmtn_STHRing' + Count_STH_Ring + '" class="anmtn_Group" src="IMG/STH_Ring.gif">'
            + '<img id="anmtn_STHadv1CrabmeatAttack' + Count_STH_Ring + '" class="anmtn_Group" src="IMG/STHadv1_CrabmeatAttack.gif">'
            + '<div id="colsrs_sthRing' + Count_STH_Ring + '" class="colsrs_Group colsrs_sthRing"></div>'
    ;
    var node_movmntElement0 = document.createElement('div');
    oneObjctsSetUpElement.after(node_movmntElement0);

    oneObjctsSetUpElement.classList.add("actv_Group");
//    oneObjctsSetUpElement.classList.add("movmnt_Group", "actv_Group");
    oneObjctsSetUpElement.setAttribute("id", "sthRing_"+Count_STH_Ring);
    oneObjctsSetUpElement.setAttribute('data-colisor_id', 'colsrs_sthRing' + Count_STH_Ring);
    oneObjctsSetUpElement.setAttribute('data-animation_id_n0', 'anmtn_STHRing' + Count_STH_Ring);
    oneObjctsSetUpElement.setAttribute('data-animation_id_n1', 'anmtn_STHadv1CrabmeatAttack' + Count_STH_Ring);

    elementHolder = document.getElementById(oneObjctsSetUpElement.dataset.animation_id_n0);    
    elementHolder.setAttribute('data-frame_size', '16');
    elementHolder.setAttribute('data-animation_frame', '0');
    elementHolder.setAttribute('data-animation_last_frame', '4');
    elementHolder.setAttribute('data-animation_speed', '7');
    elementHolder.setAttribute('data-animation_number', '0');

    elementHolder = document.getElementById(oneObjctsSetUpElement.dataset.animation_id_n1);    
    elementHolder.setAttribute('data-frame_size', '16');
    elementHolder.setAttribute('data-animation_frame', '0');
    elementHolder.setAttribute('data-animation_last_frame', '4');
    elementHolder.setAttribute('data-animation_speed', '7');
    elementHolder.setAttribute('data-animation_number', '0');
    
    node_movmntElement0.classList.add("movmnt_Group", "movmnt_Sine0");
    node_movmntElement0.setAttribute("id", "movmnt0_sthRing_"+Count_STH_Ring);
    node_movmntElement0.setAttribute('data-movement_linkedobject_id_0',  "sthRing_"+Count_STH_Ring);    
    node_movmntElement0.setAttribute('data-position_offset_x', '0');
    node_movmntElement0.setAttribute('data-position_offset_y', '0');
    node_movmntElement0.setAttribute('data-position_pos_x', document.getElementById(node_movmntElement0.dataset.movement_linkedobject_id_0).style.left);
    node_movmntElement0.setAttribute('data-position_pos_y', document.getElementById(node_movmntElement0.dataset.movement_linkedobject_id_0).style.top);
    node_movmntElement0.setAttribute('data-movement_tomove_x', '-1');
    node_movmntElement0.setAttribute('data-movement_tomove_y', '-1');
    node_movmntElement0.setAttribute('data-movement_time_0', '0');
    node_movmntElement0.style.left = 0 + "px";
    node_movmntElement0.style.top = 0 + "px";
    
    // debug movement
    node_movmntElement0.addEventListener("click", debug_selectObject);
    

    Count_STH_Ring++;
    
    return;
}

function objcts_setActive_sthRing(element)
{
    Active_STH_Ring[(Active_STH_Ring.length)] = element;
    
    return;
}

function objts_removeElement_sthRing(element)
{
    objts_removeElement(element);
    Count_STH_Ring--;
    
    return;
}