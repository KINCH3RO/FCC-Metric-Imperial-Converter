const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){

  test("isNumber",()=>{
    assert.isNumber(convertHandler.getNum("1kg"))
  
  })

   test("IsDecimal",()=>{
    assert.isNumber(convertHandler.getNum("1.5kg"))
  
  })

     test("fractional test ",()=>{
    assert.isNumber(convertHandler.getNum("1/2kg"))
  
  })

    test("fractional with decimal  test ",()=>{
    assert.isNumber(convertHandler.getNum("1.5/2kg"))
  
  })

   test("dobule fractional  test ",()=>{
    assert.isNumber(convertHandler.getNum("1/1/2kg"))
  
  })

   test("no number input test ",()=>{
    assert.isNumber(convertHandler.getNum("kg"))
  
  })

    test("valid input  ",()=>{
    assert.isOk(convertHandler.getUnit("11kg"))
  
  })

  test("invalid unit ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("gkg"),"invalid unit")
  
  })

     test("valid unit  ",()=>{
    assert.isOk(convertHandler.getReturnUnit("11kg"))
  
  })

      test("valid spell  ",()=>{
    assert.isOk(convertHandler.unitRealSpell("l"))
  
  })


test("convert gal to L ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("gal"),"L")
  
  })

  test("convert L to gal ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("L"),"gal")
  
  })

  test("convert mi to km ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("gal"),"L")
  
  })

  test("convert km to mi ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("km"),"mi")
  
  })

    test("convert lbs to kg ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("lbs"),"kg")
  
  })

    test("convert kg to lbs ",()=>{
    
    assert.equal(convertHandler.getReturnUnit("kg"),"lbs")
  
  })

  
});