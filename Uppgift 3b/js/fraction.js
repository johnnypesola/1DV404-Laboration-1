"use strict"

function Fraction(numerator, denominator){
    var _numerator =  parseFloat(numerator); // Täljare
    var _denominator = parseFloat(denominator); // Nämnare

	if(!(!isNaN(_numerator) && isFinite(_numerator) && _numerator % 1 === 0 )){
	    throw new Error("parametern täljare (" + numerator + ") måste vara ett heltal");
	}
	
    if(!(!isNaN(_denominator) && isFinite(_denominator) && _denominator % 1 === 0 && denominator == _denominator)){
	    throw new Error("parametern nämnare (" + denominator + ") måste vara ett heltal");
	}
	
	if(_denominator === 0){
	    throw new Error("parametern nämnare (" + denominator + ") får inte vara 0.");
	}
	
    this.getNumerator = function(){
        return _numerator;
    }
    
    this.getDenominator = function(){
        return _denominator;
    }
}

Fraction.prototype.add = function(otherFraction){
    
    var commonDenominator;
    var commonNumerator;
    var tD = this.getDenominator();
    var oD = otherFraction.getDenominator();
    var tN = this.getNumerator();
    var oN = otherFraction.getNumerator();
    var returnFractionObj;
    
    if(!(otherFraction instanceof Fraction))
    {
        throw new Error("argumentet måste vara av typen Fraction");
    }
    
    // Kollar om vi måste hitta gemensam nämnare
    if(tD !== oD)
    {
        // Räkna ut gemensam nämnare
        commonDenominator = tD * oD;
        
        // Räkna ut gemensamma täljare
        commonNumerator = (tD * oN) + (tN * oD);
        
        // Skapar ett nytt bråktal av de uträknade värdena
        returnFractionObj = new Fraction(commonNumerator, commonDenominator);
    }
    else
    {
        // Plussar ihop gemensamma nämnarna och skapar nytt bråktal
        returnFractionObj = new Fraction((tN + oN), tD);
    }

    return returnFractionObj;
}

Fraction.prototype.multiply = function(otherFraction){
    if(!(otherFraction instanceof Fraction)){
        throw new Error("argumentet måste vara av typen Fraction");
    }
    
    var newNumerator = this.getNumerator() * otherFraction.getNumerator();
    var newDenominator = this.getDenominator() * otherFraction.getDenominator();

    return new Fraction(newNumerator, newDenominator);
}

Fraction.prototype.isNegative = function(){
    return (this.getNumerator() < 0 || this.getDenominator() < 0);
}

Fraction.prototype.isEqualTo = function(otherObject){
    if(!(otherObject instanceof Fraction)){
        throw new Error("argumentet måste vara av typen Fraction");
    }
    
    if( this.getNumerator() === otherObject.getNumerator() &&
        this.getDenominator() === otherObject.getDenominator()){
        return true
    }
    
    return false;
}

Fraction.prototype.toString = function(){
    return this.getNumerator() + "/" + this.getDenominator();
}