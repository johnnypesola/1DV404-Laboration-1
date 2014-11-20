"use strict"

function RaknaSiffror()
{
    var formObj = document.getElementById("user-input-form");
    
    formObj.onsubmit = function(){

        var outputString = "";
        var evenCount = 0;
        var oddCount = 0;
        var zeroCount = 0;
        var inputValue = formObj.elements['user-input'].value;
    
        // Felhantering
        if(inputValue == ''){
            alert("Var god skriv någonting i textrutan");
            return false;
        }
        else if((inputValue.match(/[^\d]/) || []).length > 0){
            alert("Var god skriv ett nummer i textrutan. Endast siffror tillåtna");
        }
        
        // Räkna antal nollor, udda och jämna nummer
        for(var i = 0; i < inputValue.length; i++){
            if(inputValue[i] === "0"){
                zeroCount++;
            }
            else if(inputValue[i] % 2 == 0){
                evenCount++;
            }
            else{
                oddCount++;
            }
        }
        
        outputString = "Nollor: " + zeroCount + ", Udda: " + oddCount + ", Jämna: " + evenCount;


        // Presentera resultatet för användaren
        document.getElementById('output').innerHTML = outputString;
        
        // Hindrar formen från att postas
        return false;
    }
}

window.onload = RaknaSiffror;