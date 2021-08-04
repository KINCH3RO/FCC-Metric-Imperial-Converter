'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

const validUnits =["km","mi","gal","L","kg","lbs"];
module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get("/api/convert",(req,res)=>{
   let input = req.query.input;
   console.log("input "+ input);
  let isValidunit =validUnits.includes(convertHandler.getUnit(input)) 

  let isNumber = !isNaN(convertHandler.getNum(input))
  console.log(isNumber);
  if(isNumber && isValidunit){
    let json= {
      initNum : convertHandler.getNum(input),
      initUnit :convertHandler.getUnit(input),
      returnNum:convertHandler.convert(convertHandler.getNum(input),convertHandler.getUnit(input)),
      returnUnit:convertHandler.getReturnUnit(convertHandler.getUnit(input)),
      string:convertHandler.getString(
        convertHandler.getNum(input),
        convertHandler.getUnit(input),
convertHandler.convert(convertHandler.getNum(input),convertHandler.getUnit(input)),
convertHandler.getReturnUnit(convertHandler.getUnit(input))
      )

    }
    res.json(json);
    return;
  }
  if(!isValidunit && !isNumber){
       res.end("invalid number and unit")
  }else if(!isValidunit){
       res.end("invalid unit")
  }else if(!isNumber){
           res.end("invalid number")
  }

  })

};
