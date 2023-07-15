// const fs=require('fs')
// const express =require('express')
// const morgan=require('morgan')
// const cors=require('cors')
// const bodyParser=require('body-parser')
// const colors=require('colors')
// const dotenv=require('dotenv')
// const connectDB = require('./config/db')
// const authRoutes=require('./routes/authRoutes')
// const errorHandler = require('./middelwares/errorMiddleware')


// //Port
//  const PORT=process.env.PORT || 8080
 
//  //mongo connection
// connectDB();

// //dotenv
// dotenv.config();

// //rest object
// const app=express();
// app.get('/',(req,res)=>{
//   res.send("hello")
// })

// // middlewares
// app.use(cors())
// app.use(express.json())
// app.use(bodyParser.urlencoded({extended:false}))
// app.use(morgan('dev'))
// app.use(errorHandler)
 
// //API routes
// app.use("/api/v1/auth",authRoutes);
// app.use("/api/v1/openai",require('./routes/openairoutes'))

// // // SSL certificate paths
// // const privateKeyPath = '/path/to/private/key.pem';
// // const certificatePath = '/path/to/certificate.pem';

// // // // Create HTTPS server
// // const options = {
// //   key: fs.readFileSync(privateKeyPath),
// //   cert: fs.readFileSync(certificatePath),
// // };
// // const httpsServer = https.createServer(options, app);

// app.listen(PORT,()=>{
//     console.log(`Runing in ${process.env.DEV_MODE} port no ${PORT}`)
// })
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

//routes path
const authRoutes = require("./routes/authRoutes")
// const openaiRoutes = require("./routes/openaiRoutes")
const errorHandler = require("./middlewares/errorMiddleware");

// dotenv
dotenv.config();

// rest object
const app = express();

// mongo connection
connectDB();

// middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(morgan("dev"));
app.use(errorHandler)

// API routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/openai" , require('./routes/openaiRoutes'));

// listen server
const PORT = process.env.PORT || 8080;

app.listen(8080 ,()=>{
    console.log(`Server Running in ${process.env.DEV_MODE} on Port no. ${PORT}`.bgRed.white);
});
