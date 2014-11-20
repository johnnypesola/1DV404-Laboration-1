"use strict"

function RaknaA()
{
    var formObj = document.getElementById("user-input-form");
    
    formObj.onsubmit = function(){

        var outputString = "";
        var inputValue = formObj.elements['user-input'].value;
    
        // Felhantering
        if(inputValue == ''){
            alert("Var god skriv någonting i textrutan");
            return false;
        }
        else if((inputValue.match(/a/i) || []).length == 0){
            outputString = "<h4>Var god skriv text som innehåller ett eller flera a:n i textrutan</h4>";
        }
        
        // Räkna antal a:n:
        var lowercaseACount = (inputValue.match(/a/g) || []).length;
        var uppercaseACount = (inputValue.match(/A/g) || []).length;
        
        outputString += "Antal a: " + lowercaseACount + "<br>";
        outputString += "Antal A: " + uppercaseACount;
        
        // Presentera resultatet för användaren
        document.getElementById('output').innerHTML = outputString;
        
        // Hindrar formen från att postas
        return false;
    }
}

window.onload = RaknaA;