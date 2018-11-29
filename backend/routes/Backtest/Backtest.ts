// import {IndicateurIchimoku} from "../../Indicateurs/Ichimoku/IndicateurIchimoku";
//
// const express = require('express')
// const multer = require('multer')
// const bodyParser = require('body-parser')
// const bytes = require('bytes')
// import {Request, Response ,NextFunction} from 'express'
// import {saveJson, sendCollectionDataFromDb, sendCollectionNamesFromDb} from "../../persistence/mongodb/main";
// import IndicateurManager from "../../Indicateurs/IndicateurManager";
//
//
//
// let indicateurManager = new IndicateurManager(new IndicateurIchimoku({conversionperiod: 9, baseperiod: 26, spanperiod: 52,values: []}))
//
//
//
// export const BacktestRouter = express.Router()
//
// // let storage = multer.diskStorage({
// //
// //     destination: function (req, file, cb) {
// //         cb(null, './public/')
// //     },
// //
// //     filename: function (req, file  , cb) {
// //         console.log(file.fieldname);
// //         cb(null,file.fieldname + moment().format("_(HH:mm:ss)(DD-MM-YYYY)") + '.' + mime.getExtension(file.mimetype))
// //
// //     }
// // });
//
// let storage = multer.memoryStorage()
// let upload = multer({ storage: storage ,limits: { fileSize: bytes('10MB') }});
//
// //TODO: Les erreurs ne sont pas bien gérées
// BacktestRouter.post("/upload",
//     upload.single('uploadedFile'),
//     (req  ,resp :Response  )=>
//     {
//
//         try
//         {
//             let parsed = JSON.parse(req.file.buffer)
//             let result = indicateurManager.backtest(parsed)
//
//             saveJson(req.file.originalname.split('.')[0],result)
//
//         }
//         catch(error )
//         {
//             console.log(error);
//         }
//
//
//         // console.log(JSON.parse(req.file.buffer));
//         resp.sendStatus(200)
//
//
//
//         // next()
//
//     })
//
// //TODO: Refaire en asynchrone,  pas en continuation passing style
// //Se charge de donner les noms des collections presentes dans la BDD
// BacktestRouter.get("/load", (req : Request, resp : Response)=>{
//
//     console.log("je suis la dans le load get ");
//     sendCollectionNamesFromDb(resp)
//     // let collections  =  getCollectionsFromDb(response)
//
//
//     // resp.send(collections)
// })
//
//
//
// //Se charge du chargement des collections apres selection et submit dans les cartes
// BacktestRouter.post("/load", bodyParser.json(),
//     function(request :Request,response : Response , next : NextFunction)
//     {
//
//         console.log("POST/load ");
//         console.log(request.body);
//         sendCollectionDataFromDb(response,request.body.nameCollection)
//
//
//     })
//
//
// BacktestRouter.post("/download",
//     bodyParser.json(),
//     (req: Request,response : Response)=>
//     {
//         let {collectionSelected} = req.body
//         if ( collectionSelected === {} ||typeof  collectionSelected === "undefined" || collectionSelected === null || typeof collectionSelected !== "string"  )
//             return response.sendStatus(404)
//
//         //
//         //
//         // console.log(req.body["collectionSelected"]);
//         sendCollectionDataFromDb(response,req.body.collectionSelected)
//
//
//
//     }
// )
//
//
//
// // BacktestRouter.post("/upload",upload.single('dataFile'),(req  ,resp :Response  )=>{
// //     console.log(req.file);
// //     // console.log(JSON.parse(buffer.toString()));
// //     resp.sendStatus(200)
// //     // console.log(moment());
// //
// //
// //
// //     // next()
// //
// // })s
//
// // BacktestRouter.post("/upload",bodyParser.json(),(req,resp)=>{
// //     console.log("Je suis dans le /upload/json");
// //
// //     console.log(req.body);
// // })
//
//
//
// // crypto.pseudoRandomBytes(16, function (err, raw) {
// //     cb(null, raw.toString('hex') );
// // });
//
//
//
//
//
//
