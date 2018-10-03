var Count_STH_Ring = 0;
var Active_STH_Ring = [];

function objcts_Init_sthRing(oneObjctsSetUpElement)
{
    oneObjctsSetUpElement.innerHTML =
            '<img class="" src="IMG/STH_Ring.gif">'
            + '<img src="IMG/STHadv1_CrabmeatAttack.gif">'
            + '<div id="colsrs_sthRing'+Count_STH_Ring+'" class="colsrs_Group colsrs_sthRing"></div>';

    oneObjctsSetUpElement.setAttribute('data-frame_size', '16');
    oneObjctsSetUpElement.setAttribute('data-animation_frame', '0');
    oneObjctsSetUpElement.setAttribute('data-animation_last_frame', '4');
    oneObjctsSetUpElement.setAttribute('data-animation_speed', '7');
    oneObjctsSetUpElement.setAttribute('data-animation_number', '0');

    oneObjctsSetUpElement.classList.add("anmtn_Group", "movmnt_Group", "actv_Group");

    oneObjctsSetUpElement.style.top = 100 + Math.floor(Math.random() * 101)*3 +  "px";
    
    oneObjctsSetUpElement.setAttribute('data-colisor_id', 'colsrs_sthRing'+Count_STH_Ring);
    
    Count_STH_Ring++;
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