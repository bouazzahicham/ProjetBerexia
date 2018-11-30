import {Router} from 'express'
import {Request, Response ,NextFunction} from 'express'
import * as moment from 'moment'
const mime = require('mime-types')
const multer = require('multer')
const bodyParser = require('body-parser')
const bytes = require('bytes')


const UploadRouter : Router = Router()

// let storage = multer.memoryStorage()

let storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './storage/')
    },

    filename: function (req, file  , cb) {
        console.log(file.fieldname);
        cb(null,moment().format("(HH:mm:ss)(DD-MM-YYYY)")+"_"+file.originalname)

    }
});


let upload = multer({ storage: storage ,limits: { fileSize: bytes('100MB') }});

//Nom du fichier en FormData : file
UploadRouter.post("/upload",
    upload.single('file'),
    (req : any  ,response :Response  )=>
    {
        console.log("Début d'upload" + moment())
        console.log(req);
        try
        {

            response
                .send({
                    "Message" : "Thanks babe"})



        }
        catch(error )
        {
            console.log(error);
        }




    })




export default UploadRouter ;



