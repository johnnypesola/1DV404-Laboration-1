"use strict"

function NastStorsta()
{
    var formObj = document.getElementById("user-input-form");
    var inputContainer = document.getElementById("input-container");
    var numberOfInputs = 10;

    // Lägg till önskat många inputs i formen
    for(var i = 0; i < numberOfInputs; i++)
    {
        inputContainer.appendChild(document.createElement("input"));
    }
    
    formObj.onsubmit = function(){
        
        var outputString = "";
        var inputs = inputContainer.getElementsByTagName("input");

        var highestValue;
        var nextHighestValue;

        // Går igenom alla inputs
        for(var i = 0; i < inputs.length; i++){
            // Felhantering
            if(  inputs[i].value === '' ||
                (inputs[i].value.match(/^-?[1-9]\d*$/) || []).length === 0){
                
                alert("Var god skriv totalt " + numberOfInputs + " heltal i varsit fält.");
                return false;
            }
            
            // Tar reda på om värdet är högst
            if(+inputs[i].value >= +highestValue || typeof(highestValue) == "undefined"){
                nextHighestValue = highestValue;
                highestValue = inputs[i].value;
            }
            // Om inte värdet var högst, tar reda på om det är näst högst
            else if(+inputs[i].value >= +nextHighestValue || typeof(nextHighestValue) == "undefined"){
               nextHighestValue = inputs[i].value;
            }

        }
        
        // Presentera resultatet för användaren
        document.getElementById('output').innerHTML = outputString;

        // Hindrar formen från att postas
        return false;
    }
}

window.onload = NastStorsta;