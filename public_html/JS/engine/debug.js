/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//#############
//### debug ###
//#############
var isDebugOn = true;
var debugOnState = 1;

function debug_Escrever(id_Elemento, texto_Elemento)
{
    if (isDebugOn)
    {
        document.getElementById(id_Elemento).innerHTML = texto_Elemento;
    }

}

function debug_Init()
{
    if (!isDebugOn)
    {
        removeElement(document.getElementById('id_debug_Div'));
    }
}

function debug_SetVisible()
{
    debugOnState = (debugOnState % 3);
    if (debugOnState == 0)
    {
        document.getElementById("id_debug_Div").style.display = "none";
        document.getElementById("id_debug_Div").style.background = "";
        document.getElementById("id_debug_Div").style.opacity = "1";
        
        main_isGameSoftPaused = false;
    }
    else
    {
        if (debugOnState == 1)
        {
            document.getElementById("id_debug_Div").style.display = "inline";
            
            main_isGameSoftPaused = false;
        }
        if (debugOnState == 2)
        {
            document.getElementById("id_debug_Div").style.background = "black";
            document.getElementById("id_debug_Div").style.opacity = "0.5";
            
            main_isGameSoftPaused = true;
        }
    }
}
