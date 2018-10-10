var Count_STH_Ring = 0;
var Active_STH_Ring = [];

function objcts_Init_sthRing(oneObjctsSetUpElement)
{
    var elementHolder = null;
    
    oneObjctsSetUpElement.innerHTML =
            '<img  id="anmtn_STHRing' + Count_STH_Ring + '" class="anmtn_Group" src="IMG/STH_Ring.gif">'
            + '<img id="anmtn_STHadv1CrabmeatAttack' + Count_STH_Ring + '" class="anmtn_Group" src="IMG/STHadv1_CrabmeatAttack.gif">'
            + '<div id="colsrs_sthRing' + Count_STH_Ring + '" class="colsrs_Group colsrs_sthRing"></div>'
    ;

//    oneObjctsSetUpElement.classList.add("actv_Group");
    oneObjctsSetUpElement.classList.add("movmnt_Group", "actv_Group");
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

    Count_STH_Ring++;

    //debug
    oneObjctsSetUpElement.style.top = 100 + Math.floor(Math.random() * 101) * 3 + "px";
}

function objcts_setActive_sthRing(element)
{
    Active_STH_Ring[(Active_STH_Ring.length)] = element;
}

function objts_removeElement_sthRing(element)
{
    objts_removeElement(element);
    Count_STH_Ring--;
}