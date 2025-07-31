import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import router from "./config/routes.js";

// Cargar variables de entorno
dotenv.config();

const app = express();

const corsOption={
    //Conect rutes
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
    }

app.use(bodyParser.urlencoded({ extended: false }));  
app.use(bodyParser.json());

app.use("/api", cors(corsOption), router);

app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.get('/api',(req,res)=>{
    res.send('Andamos en API')
})

// Verifica que la variable de entorno PORT esté configurada
const PORT = process.env.PORT || 8000;
console.log(`PORT: ${PORT}`);

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${server.address().port}`);
});

export default app;
