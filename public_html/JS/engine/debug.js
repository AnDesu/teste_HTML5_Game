
var isDebugOn = true;



function debug_Init()
{
    if (!isDebugOn)
    {
        objts_removeElement(document.getElementById('id_debug_Div'));
        return;
    }

    return;
}

function debug_run()
{
    if (!isDebugOn)
    {
        return;
    }
        
    debug_objectManipulation_Init();
    
    debug_debugActions();
    debug_manipulateSelectedObject();

    return;
}



//#######################
//### debug functions ###
//#######################

function debug_Escrever(id_Elemento, texto_Elemento)
{
    if (isDebugOn)
    {
        document.getElementById(id_Elemento).innerText = texto_Elemento;
    }

    return;
}

function debug_Alert(texto)
{
    if (isDebugOn)
    {
        alert(texto);
    }

    return;
}



//#####################
//### debug actions ###
//#####################

function debug_debugActions()
{
    //Mostrar Debug Menu
    if (gameButton1 == 1)
    {
        debugOnState++;
        debug_SetVisible();
    }
    
    return;
}



//##################
//### debug menu ###
//##################

var debugOnState = 1;

function debug_SetVisible()
{
    debugOnState = (debugOnState % 3);

    if (debugOnState == 0)
    {
        document.getElementById("id_debug_Div").style.display = "none";
        document.getElementById("id_debug_Div").style.background = "";
        document.getElementById("id_debug_Div").style.opacity = "1";

        //set invisible objects back to invisible
        var allInvisibleElements = document.querySelectorAll(".colsrs_Group, .movmnt_Group");
        for (i = 0; i < allInvisibleElements.length; i++)
        {
            allInvisibleElements[i].classList.remove("objects_Desinvisible");
        }

        main_isAnimationtPaused = false;
    }
    else
    {
        if (debugOnState == 1)
        {
            document.getElementById("id_debug_Div").style.display = "inline";

            //set invisible objects to visible
            var allInvisibleElements = document.querySelectorAll(".colsrs_Group, .movmnt_Group");
            for (i = 0; i < allInvisibleElements.length; i++)
            {
                allInvisibleElements[i].classList.add("objects_Desinvisible");
            }

            main_isAnimationtPaused = false;
        }
        if (debugOnState == 2)
        {
            document.getElementById("id_debug_Div").style.background = "black";
            document.getElementById("id_debug_Div").style.opacity = "0.5";

            main_isAnimationtPaused = true;
        }
    }

    return;
}



//###########################
//### object manipulation ###
//###########################

function debug_objectManipulation_Init()
{
    var objectsToManipulate = document.getElementsByClassName('movmnt_Group');
    for (i = 0; i < objectsToManipulate.length; i++)
    {
        objectsToManipulate[i].classList.add("objcts_clickable");
    }

    return;
}

var debg_selectedObject = null;
function debug_manipulateSelectedObject()
{
    if (gamply_clickedObject != null)
    {
        debug_selectObject();
    }

    if (debg_selectedObject == null)
    {
        debug_Escrever("id_debug_selectedObjectPosX", "empty");
        debug_Escrever("id_debug_selectedObjectPosY", "empty");
        return;
    }

    var rect1 = debg_selectedObject.getBoundingClientRect();
    debug_Escrever("id_debug_selectedObjectPosX", rect1.left);
    debug_Escrever("id_debug_selectedObjectPosY", rect1.top);


    if (debg_selectedObject.dataset.movement_tomove_x != "undefined")
    {
        debg_selectedObject.dataset.movement_tomove_x = main_mousePosX + "px";
        debg_selectedObject.dataset.movement_tomove_y = main_mousePosY + "px";
//        debg_selectedObject.dataset.position_pos_x = main_mousePosX + "px";
//        debg_selectedObject.dataset.position_pos_y = main_mousePosY + "px";
    }
    else
    {
//        debg_selectedObject.style.left = main_mousePosX + "px";
//        debg_selectedObject.style.top = main_mousePosY + "px";
    }


    return;
}

function debug_selectObject()
{
    if (debg_selectedObject != null && debg_selectedObject != gamply_clickedObject)
    {
        debg_selectedObject.classList.remove("debug_objctSelected");
    }

    gamply_clickedObject.classList.toggle("debug_objctSelected");
    if (gamply_clickedObject.classList.contains("debug_objctSelected"))
    {
        debg_selectedObject = gamply_clickedObject;
    }
    else
    {
        debg_selectedObject = null;
    }

    return;
}