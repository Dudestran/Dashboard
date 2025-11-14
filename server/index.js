import express, { urlencoded } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import router from "./routes/user.route.js";
import path from "path";


dotenv.config({});


const app = express();

const PORT= process.env.PORT || 3000;

const __dirname = path.resolve();


//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(urlencoded({extended:true}));


const corsOPtions ={
    origin:'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOPtions));

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get( (req,res)=>{
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
})


app.use("/api/v1/user", router);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at ${PORT}`);
   
})