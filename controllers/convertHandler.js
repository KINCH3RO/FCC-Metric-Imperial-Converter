function ConvertHandler() {

  this.getNum = function(input) {
    let equation = input.replace(/[A-z]/g, "");
    if(equation.length==0){
      return 1;
    }
    if(equation.match(/(\/{2,})/) || equation.match(/\/[A-z0-9]+.?[A-z0-9]*\//) ){
     return NaN;
    }else{
       let result=eval(equation);
    
      return parseFloat(result);
    }
   
  };

  this.getUnit = function(input) {
    let result = input.match(/[A-z]+/)
   
    if(result != null){
      
    return this.unitRealSpell(result.join());
    }else{
      return null;
    }

  };

  this.unitRealSpell=function(unit){
    let lowerCasedunit=unit.toLowerCase();
    if(lowerCasedunit==="l"){
      return "L";
    }
    return lowerCasedunit;
  }
  
  this.getReturnUnit = function(initUnit) {

    let result;
    switch (this.unitRealSpell(initUnit)) {
      case "km": result = "mi"; break;
      case "mi": result = "km"; break;
      case "gal": result = "L"; break;
      case "L": result = "gal"; break;
      case "kg": result = "lbs"; break;
      case "lbs": result = "kg"; break;
      default: result = "invalid unit"; break;

    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch (this.unitRealSpell(unit)){
      case "km": result = "kilometers"; break;
      case "mi": result = "miles"; break;
      case "gal": result = "gallons"; break;
      case "L": result = "liters"; break;
      case "kg": result = "kilograms"; break;
      case "lbs": result = "pounds"; break;
 

    }
    return result;
  };

  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    switch (this.unitRealSpell(initUnit)){
      case "km": result =initNum/miToKm; break;
      case "mi": result = initNum*miToKm;break;
      case "gal": result = initNum*galToL; break;
      case "L": result = initNum/galToL; break;
      case "kg": result = initNum/lbsToKg; break;
      case "lbs": result = initNum*lbsToKg; break;
 

    }
    return parseFloat(result.toFixed(5));
  };

  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result=initNum+" "+ this.spellOutUnit(initUnit)+" converts to "+returnNum+" "+this.spellOutUnit(returnUnit);

console.log(result)
    return result;
  };

  
}

module.exports = ConvertHandler;
