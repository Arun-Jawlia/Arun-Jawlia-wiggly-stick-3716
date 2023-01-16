const express = require('express');
const { resetWatchers } = require('nodemon/lib/monitor/watch');
const { AuthsModel } = require('../Model/Notesmodel');
const jwt = require("jsonwebtoken");
const authRouter = express.Router();
require('dotenv').config()
// this is get req
authRouter.get("/",(req,res)=>{
    res.send("THis is get req");
})
// this is another endpoints 
// authRouter.get("/weather",(req,res)=>{
//     // first got token from params
//     const token = req.query.token;
//     // here we want to access it with the token so first we have to decode our token
//      const decoded = jwt.verify(token,process.env.key,{expiresIn: '01h'},(err,decoded)=>{
//         if(err){
//             res.send(err);
//         }
//         else if(decoded){
//             res.send("This is the Weather page after login");
//         }
//      });

// })

// this is the purchased page
// authRouter.get("/purchased",(req,res)=>{
//     // first got token from params
//     const token = req.query.token;
//     // here we want to access it with the token so first we have to decode our token
//      const decoded = jwt.verify(token,process.env.key,{expiresIn: '01h'},(err,decoded)=>{
//         if(err){
//             res.send(err);
//         }
//         else if(decoded){
//             res.send("This is the purchased page after login");
//         }
//      });
    
// })
// this is the about page
// authRouter.get("/about",(req,res)=>{
//     // first got token from params
//     const token = req.headers.authorization?.split(" ")[1];
//     // here we want to access it with the token so first we have to decode our token
//      const decoded = jwt.verify(token,process.env.key,{expiresIn: '01h'},(err,decoded)=>{
//         if(err){
//             res.send(err);
//         }
//         else if(decoded){
//             res.send("This is the purchased page after login");
//         }
//      });
    
// })


// this is for sign up
authRouter.post("/signup",async (req,res)=>{
    const payload = req.body;
    try{
       const user = new AuthsModel(payload);
       await user.save();
       res.send("Signup Successfull");
       console.log(`${user} signed up successfull`);
    }
    catch(e){
        res.send("Signup Unsucessfull")
        console.log(e);
    }
    
})
// this is for login
authRouter.post("/login",async (req,res)=>{
    try{
        const {email,password} = req.body;
        const user = await AuthsModel.find({email,password});
        console.log(user);
        if(user.length > 0){
        // create the token using jwt only when user succefully login
        // create the token key using jwt
        const token  = jwt.sign({ "class":"nxm" }, 'tanya');
        res.send({"msg":"Login is successful","token":token});//we have to pass the token in json format
        }
        else{
            res.send("User not found please sign up ");
        }
    }
    catch(e){
        res.send("Something worng in database")
        console.log(e)
    }
   
})

module.exports = {authRouter};