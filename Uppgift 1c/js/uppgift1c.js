"use strict"

function NastStorsta()
{
    var formObj = document.getElementById("user-input-form");
    
    formObj.onsubmit = function(){

        var outputString = "";
        var inputValue = formObj.elements['user-input'].value;
        var inputsArray;
    
        // Felhantering
        if(inputValue == ''){
            alert("Var god skriv någonting i textrutan");
            return false;
        }
        else if((inputValue.match(/[^\d\s\-]|\-[^\d]/) || []).length > 0 || inputValue[inputValue.length-1] == "-"){
            alert("Var god skriv en serie nummer. Till exempel \"32423 -12141 12412 43 0\"");
            return false;
        }

        // Skapar array av godtyckligt antal nummer
        inputsArray = inputValue.trim().split(/\s+/);
        
        // Kollar om man har angett minst två värden
        if(inputsArray.length < 2){
            alert("Du måste ange minst två stycken nummer");
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