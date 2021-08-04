const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);

suite('Functional Tests', function() {

  test("Test  valid input such as 10L: GET ", function (done) {
      chai
        .request(server)
        .get("/api/convert?input=10L")
        .end(function (err, res) {
          
          let responseObject = JSON.parse(res.text);
          assert.equal(res.status, 200);
          assert.isNumber(responseObject.initNum)
       
          done();
        });
    });


    test("Test  invalid input such as 32g: GET", function (done) {
      chai
        .request(server)
        .get("/api/convert?input=32g")
        .end(function (err, res) {
          

          assert.equal(res.status, 200);
         assert.equal(res.text, "invalid unit");
       
          done();
        });
    });


     test("Test  invalid number such as 3/7.2/4kg", function (done) {
      chai
        .request(server)
        .get("/api/convert?input=3/7.2/4kg")
        .end(function (err, res) {
          

          assert.equal(res.status, 200);
         assert.equal(res.text, "invalid number");
       
          done();
        });
    });

     test("Test  invalid number AND unit such as 3/7.2/4kilomegagram ", function (done) {
      chai
        .request(server)
        .get("/api/convert?input=3/7.2/4kilomegagram")
        .end(function (err, res) {
          

          assert.equal(res.status, 200);
         assert.equal(res.text, "invalid number and unit");
       
          done();
        });
    });

     test("Test  number such as kg: GET ", function (done) {
      chai
        .request(server)
        .get("/api/convert?input=kg")
        .end(function (err, res) {
          
 let responseObject = JSON.parse(res.text);
          assert.equal(res.status, 200);
          assert.equal(responseObject.initNum,1)
       
          done();
        });
    });

});
