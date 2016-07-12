var express=require('express');
var router=express();



var MyModel=require('../Movie.Model');


router.get('/', function(req, res, next) {
  res.send("Hello1!");
});


router.get('/movieget', function(req,res){
  MyModel.find({}).exec(function(err,data){
    if(err)
      res.send('error.....');
    else
      {
       res.json(data);
      }
  });

});


router.post('/moviepost', function(req, res){
  MyModel.create(req.body, function(err, data){
    if(err)
      console.log('error..!'+err);
      else {
        res.send(data);
      }
  });
});

router.delete('/movieDelete/:id', function(req, res) {
 MyModel.remove({_id: req.params.id}).exec(function(err, movie) {
     if(err)
      {
        return res.send(err);
      }
     else
     {
       res.json(movie);
     }
   });
});


router.put('/movieUpdate/:id',function(req,res){
  console.log(JSON.stringify(req.body));
 MyModel.update({_id:req.params.id},req.body,function(err,data){
   if(err){
     res.send('Error in update');
   }
   else {
     res.send(data);
   }
 });
});



module.exports=router;
