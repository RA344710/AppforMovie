var should=require("chai").should(),
supertest=require("supertest"),
app=require("../app");

var url=supertest("http://localhost:8080");

describe("Testing the Movie Exists or Not", function(err)
{
  it("should handel the request", function(done)
{
  url
  .get("/")
  .expect(200)
  .end(function(err,res){
    if(err){
      throw err;
    }
    res.text.should.be.equal("Hello1!");
    done();
  });
});
});
