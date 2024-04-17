const mongoose = require('mongoose');
const express=require('express')
const cors=require('cors')
const data_schema=require("./schema")
const data_schema2=require("./schema2")
const bcrypt = require('bcrypt');
const app=express()

   mongoose.connect('mongodb://127.0.0.1:27017/course')
   .then(()=>{

    console.log('db connected');

   })
   .catch(()=>{

    console.log('db is not connected');
})
app.use(cors())
app.use(express.json())

app.post("/Registration", async (req, res) => {
    const existingUser = await data_schema.findOne({ email: req.body.email });
    
    if (existingUser) {
        // Email already exists, send an error response
        return res.json({ status: "Email already exists" });
    }

    // Email doesn't exist, proceed with saving the data
    const data = new data_schema({ ...req.body });
    try {
        const savedData = await data.save();
        // res.json(savedData);
        return res.json({ status: 'success', savedData });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});


  app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await data_schema.findOne({ email });

        if (!user) {
            return res.json({ status: "Email not valid" });
        }

        if (password !== user.password) {
            return res.json({ status: "not valid" });
        }

        res.json({ status: "login success" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ status: "Error during login" });
    }
});

app.post("/Registratio",async (req, res) => {
    const data = new data_schema({
      ...req.body,
    });
    const save_data = await data.save();
    res.json(save_data);
  })
  

  
app.listen(3003,()=>{
    console.log('server running in 3003');
})



