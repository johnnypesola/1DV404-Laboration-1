"use strict"

function NastStorsta()
{
    var formObj = document.getElementById("user-input-form");
    
    formObj.onsubmit = function(){

        var outputString = "";
        var inputValue = formObj.elements['user-input'].value;
        var inputsArray;
    
        // Felhantering
        if(  inputValue == '' ||
            (inputValue.match(/[^\d\s\-]|\-[^\d]/) || []).length > 0 ||
             inputValue[inputValue.length-1] == "-"){
            
            alert("Var god skriv tio heltal separerade med mellanslag.");
            return false;
        }

        // Skapar array av godtyckligt antal nummer
        inputsArray = inputValue.trim().split(/\s+/);
        
        // Kollar om man har angett minst två värden
        if(inputsArray.length !== 10){
            alert("Du måste ange tio heltal");
            return false;
        }
        
        // Sorterar värdena efter numrets värde
        inputsArray.sort(function(a, b){
          return a - b;
        });
        
        outputString = "Det nästhögsta värdet " + inputsArray[inputsArray.length-2];

        // Presentera resultatet för användaren
        document.getElementById('output').innerHTML = outputString;
        
        // Hindrar formen från att postas
        return false;
    }
}

window.onload = NastStorsta;