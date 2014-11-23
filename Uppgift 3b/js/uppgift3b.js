"use strict"

function exec()
{
    var formObj = document.getElementById("user-input-form");
    
    formObj.onsubmit = function(){
        var numerator = document.getElementById("user-input-numerator").value;
        var denominator = document.getElementById("user-input-denominator").value;
    
        try
        {
            var myFraction1 = new Fraction(numerator, denominator);
            
            var myFraction2 = new Fraction(10, 20);
        }
        catch (error)
        {
            alert(error);
        }
        
        // Addera fraction objekt
        alert("Ditt bråktal adderad med bråktalet 10/20 blir " + myFraction1.add(myFraction2).toString());
        
        // Multiplicera fraction object
        alert("Ditt bråktal multiplicerad med bråktalet 10/20 blir " + myFraction1.multiply(myFraction2).toString());
        
        // Om bråktalsobjektet är negativt
        alert("Om ditt bråktal är negativt: " + myFraction1.isNegative());
        
        // Om bråktalsobjekten är lika
        alert("Ditt bråktal har samma värden som bråktalsobjektet med värdena 10/20: " + myFraction1.isEqualTo(myFraction2));
        
        return false;
        
    }
}

window.onload = exec;