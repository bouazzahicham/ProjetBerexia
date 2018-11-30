import express = require('express');
import bodyparser = require('body-parser');
import {config, PORT} from './config/configuration'
import * as path from "path";
import UploadRouter from "./routes/Upload/UploadRouter";

const app  : express.Application = express();
//Difference between json and jsonp
app.use(config);
app.use(bodyparser.json())
app.use("/storage",express.static(path.join(__dirname, 'storage/')));

//Traiter les upload
// app.use("./storage/",)

console.log("Bienvenue dans le projet Berexia ");

app.get("/",(request,response) => {

    console.log(`Requete venant de : \n \t => ${request}`);
    response.send({"driss" : "zamel"})
})

app.use(UploadRouter)
//Il nous faut d'abord un indicateur Manager

//On configure ici

// app.use(BacktestRouter)
app.listen(PORT,()=>{
})







//TODO "Download from API"
