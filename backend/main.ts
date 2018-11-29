import express = require('express')
import bodyparser = require('body-parser')
import {config, PORT} from './config/configuration'
import {BacktestRouter} from './routes/Backtest/Backtest'
import * as path from "path";

const app  : express.Application = express();
//Difference between json and jsonp
app.use(config);
app.use(bodyparser.json())
app.use("/static",express.static("./public"))
//Traiter les upload
app.use(express.static(path.join(__dirname, 'public/')));


console.log("Hello world");


//Il nous faut d'abord un indicateur Manager

//On configure ici

app.use(BacktestRouter)
app.listen(PORT,()=>{
})







//TODO "Download from API"
