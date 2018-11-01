
var isDebugOn = true;

//#######################
//### debug main loop ###
//#######################

function debug_run()
{
    if (!isDebugOn)
    {
        return;
    }
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
        document.getElementById(id_Elemento).innerHTML = texto_Elemento;
    }

    return;
}

function debug_Alert(texto)
{
    alert(texto);

    return;
}



//##################
//### debug menu ###
//##################

function debug_Init()
{
    if (!isDebugOn)
    {
        objts_removeElement(document.getElementById('id_debug_Div'));
        return;
    }

    debug_objectManipulation_Init();

    return;
}

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
        var allInvisibleElements = document.getElementsByClassName("colsrs_Group");
        for (i = 0; i < allInvisibleElements.length; i++)
        {
            allInvisibleElements[i].classList.remove("objects_Desinvisible");
        }
        allInvisibleElements = document.getElementsByClassName("movmnt_Group");
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

            main_isAnimationtPaused = false;
        }
        if (debugOnState == 2)
        {
            document.getElementById("id_debug_Div").style.background = "black";
            document.getElementById("id_debug_Div").style.opacity = "0.5";

            //set invisible objects to visible
            var allInvisibleElements = document.getElementsByClassName("colsrs_Group");
            for (i = 0; i < allInvisibleElements.length; i++)
            {
                allInvisibleElements[i].classList.add("objects_Desinvisible");
            }
            allInvisibleElements = document.getElementsByClassName("movmnt_Group");
            for (i = 0; i < allInvisibleElements.length; i++)
            {
                allInvisibleElements[i].classList.add("objects_Desinvisible");
            }

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
    var objectsToManipulate = null;

    objectsToManipulate = document.querySelector("#id_gameMainDiv").querySelectorAll(".objcts_setUp");
    objectsToManipulate.forEach(function (objectToManipulate) {
        objectToManipulate.addEventListener("click", debug_selectObject);
    });

    return;
}

var selectedObject = null;
function debug_selectObject()
{
    if (selectedObject != null && selectedObject != this)
    {
        selectedObject.classList.remove("debug_objctSelected");
    }

    this.classList.toggle("debug_objctSelected");
    if (this.classList.contains("debug_objctSelected"))
    {
        selectedObject = this;
    }
    else
    {
        selectedObject = null;
    }

    return;
}

function debug_manipulateSelectedObject()
{
    if (selectedObject == null)
    {
        debug_Escrever("id_debug_selectedObjectPosX", "empty");
        debug_Escrever("id_debug_selectedObjectPosY", "empty");
        return;
    }

//if(!main_isMouseDown)
//{
//    return;
//}

    var rect1 = selectedObject.getBoundingClientRect();
    debug_Escrever("id_debug_selectedObjectPosX", rect1.left);
    debug_Escrever("id_debug_selectedObjectPosY", rect1.top);

    selectedObject.style.left = main_mousePosX + "px";
    selectedObject.style.top = main_mousePosY + "px";

    return;
}