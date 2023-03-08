const express=require('express')
const Model=require('../model/model')
const router=express.Router();
router.post('/add', async (req,res)=>{
   
    const data=new Model({
        title:req.body.title,
        director:req.body.director,
        actor:req.body.actor,
        genre:req.body.genre
    })
    try{
      
        const dataToSave=await data.save();
        res.status(200).json(dataToSave)
    }catch(error){
        res.status(400).json({message:error.message})
    }
})
// router.get('/show',async (req,res)=>{
// const movies=await Model.find(() => {
//     if (error) {
//       return next(error);
//     } else {
        
//       res.json(data);
//       console.log(data)
      
//     }
//   });
router.get("/show", function (req, res) {
    Model.find({}, function (err, data) {
        if (!err) {
           res.json(data)
        } else {
            throw err;
        }
    }).clone().catch(function(err){ console.log(err)})
});
// const movies=await Model.find();
//  res.json(movies)
//       }catch(err){
//           console.log(err);
//     res.status(500).json({ error: 'server error' });
//       }
    

 router.delete("/delete/:id",(req,res)=>{
     Model.findByIdAndDelete(req.params.id)
     .then((movie)=>{
         if(!movie){
             return req.status(400).send({
                 message:"Movie not found with the id "+req.params.id
             })
         }
         res.send({
             message:"Movie deleted successfully"
         })
     })
     .catch(err=>{
         return res.status(400).send({
                 message:"Movie not found with the id "+req.params.id
             })
     })
 })
 router.post("/search/:title",(req,res)=>{

   
Model.findOne({title: {req.params.title} }, function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Result : ", docs);
    }
});
 })

// router.delete('/delete/:id',(req,res)=>{
//     Model.findByIdAndRemove(
//         req.params.id,(error,data)=>{
//              if(error){
//           .       return next(error)
//              }else{
//                  res.status(200).json({
//                      msg:data
//                  })
//              }
//         }
//     )
// })
router.delete('/delete/:id',(req,res)=>{
    Model.findByIdAndDelete(req.params.id,(error,data)=>{
        if(error){
            console.log(error)
        }else{
            console.log("Deleted ",data)
        }
    })
})

module.exports= router;