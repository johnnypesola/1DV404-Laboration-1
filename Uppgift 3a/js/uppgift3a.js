"use strict"

function Palindrom()
{
    var formObj = document.getElementById("user-input-form");

    formObj.onsubmit = function(){
        
        var reversedInput = "";
        var inputValue = document.getElementById("user-input").value;
        var outputString = "";
        
        // Felhantering
        if(inputValue === ''){
            alert(inputValue);
            alert("Var god skriv någonting i textrutan");
            return false;
        }
        
        // Använd skriven funktion för att kontrollera om den angivna strängen en är palindrom.
        outputString = inputValue + " är " + (isPalindrom(inputValue) ? '' : 'inte') + " en palindrom";
        
        outputString += "<h5> Exempel på andra palindromer:</h5>";
        outputString += "naturrutan " + " är " + (isPalindrom("naturrutan") ? '' : 'inte') + " en palindrom<br>";
        outputString += "Vila sig i saliv" + " är " + (isPalindrom("Vila sig i saliv") ? '' : 'inte') + " en palindrom<br>";

        // Presentera resultatet för användaren
        document.getElementById('output').innerHTML = outputString;

        // Hindrar formen från att postas
        return false;
    }
    
    function isPalindrom(string)
    {
        // Förberreder strängen
        string = string.replace(/\s/g, "").toLowerCase();
        
        // Testar om den angivna strängen är en palindrom
        if(string === string.split("").reverse().join("")){
            return true;
        }
        else{
            return false;
        }
    }
}

window.onload = Palindrom;