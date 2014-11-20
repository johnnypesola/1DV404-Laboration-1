"use strict"

function RaknaA(formObj)
{
    var inputValue = formObj.elements['user-input'].value;
    
    // Felhantering
    if(inputValue == '')
    {
        alert("Var god skriv någonting i textrutan");
        return false;
    }
    else if((inputValue.match(/a/i) || []).length == 0)
    {
        alert("Var god skriv text som innehåller ett eller flera a:n i textrutan");
        return false;
    }
    
    // Räkna antal a:n:
    var lowercaseACount = (inputValue.match(/a/g) || []).length;
    var uppercaseACount = (inputValue.match(/A/g) || []).length;
    
    var outputString = "Antal a: " + lowercaseACount + "<br>";
    outputString += "Antal A: " + uppercaseACount;
    
    // Presentera resultate för användaren
    document.getElementById('output').innerHTML = outputString;
    
    // Hindrar formen från att postas
    return false;
}