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

function debug_escrever(id_Elemento, texto_Elemento)
{
    if (isDebugOn)
    {
        document.getElementById(id_Elemento).innerHTML = texto_Elemento;
    }

}

function debugInit()
{
    if (!isDebugOn)
    {
        removeElement(document.getElementById('div_Debug'));
    }
}

function debugSetVisible()
{
    debugOnState = (debugOnState % 3);
    if (debugOnState == 0)
    {
        document.getElementById("div_Debug").style.display = "none";
        document.getElementById("div_Debug").style.background = "";
        document.getElementById("div_Debug").style.opacity = "1";
    }
    else
    {
        if (debugOnState == 1)
        {
            document.getElementById("div_Debug").style.display = "inline";
        }
        if (debugOnState == 2)
        {
            document.getElementById("div_Debug").style.background = "black";
            document.getElementById("div_Debug").style.opacity = "0.5";
        }
    }
}
