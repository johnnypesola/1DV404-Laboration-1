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
        alert(myFraction1.add(myFraction2).toString());
        
        // Multiplicera fraction object
        alert(myFraction1.multiply(myFraction2).toString());
        
        return false;
        
    }
}

window.onload = exec;