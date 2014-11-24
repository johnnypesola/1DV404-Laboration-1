"use strict"

function exec()
{
    var formObj = document.getElementById("user-input-form");
    
    formObj.onsubmit = function(){
        var numerator = document.getElementById("user-input-numerator").value;
        var denominator = document.getElementById("user-input-denominator").value;
        var output = '';
    
        try
        {
            var myFraction1 = new Fraction(numerator, denominator);
            
            var myFraction2 = new Fraction(6, 3);
        }
        catch (error)
        {
            alert(error);
        }
        
        // Addera fraction objekt
        output += "<div>Ditt bråktal adderad med bråktalet 6/3 blir " + myFraction1.add(myFraction2).toString() + "</div>";
        
        // Multiplicera fraction object
        output += "<div>Ditt bråktal multiplicerad med bråktalet 6/3 blir " + myFraction1.multiply(myFraction2).toString() + "</div>";
        
        // Om bråktalsobjektet är negativt
        output += "<div>Om ditt bråktal är negativt: " + myFraction1.isNegative() + "</div>";
        
        // Om bråktalsobjekten är lika
        output += "<div>Ditt bråktal har samma värden som bråktalsobjektet med värdena 6/3: " + myFraction1.isEqualTo(myFraction2) + "</div>";

        document.getElementById("output").innerHTML = output;
        
        return false;
        
    }
}

window.onload = exec;