
//TODO: Create user only for IchimokuProject


import {Response} from 'express'
import {MongoClient, Db , Cursor} from "mongodb";
const assert = require('assert');
import * as _moment from 'moment'

const url = 'mongodb://admin:myMongodbPassword@localhost:27017'
const date = _moment()



export function saveJson(name,jsonArray)
{
    MongoClient.connect(url, function (err, client)
    {
        if (err) return -1;
        const ichimokuProjectDatabase: Db = client.db("IchimokuProject");


        let collection = ichimokuProjectDatabase.collection(name);
        if (collection !== null || typeof collection !== "undefined")
            collection.drop()

        ichimokuProjectDatabase
            .createCollection(name)
            .then((collection)=>{
                collection.insertMany(jsonArray)
            })
            .catch((error)=>{
                console.log(error);
            })


    })



}
export  function sendCollectionNamesFromDb(response)
{

    MongoClient.connect(url,function(err,client)
        {
            if (err) return -1;
            let db = client.db("IchimokuProject");

            db.listCollections().toArray((err, array) =>
            {
                let collectionNames = array.map((collection) =>

                {

                    return {
                        "text": collection.name,
                        "value" : collection.name
                    }

                })
                response.send(collectionNames)
            })

        }
    )




}
export function sendCollectionDataFromDb(response : Response ,collectionName)
{
    MongoClient.connect(url,function(err,client)
        {
            if (err) return -1;
            let db = client.db("IchimokuProject");

            let collectionData  : Array<Object> = []

            db.collection(collectionName)
                .find({})
                .toArray()
                .then((result)=>{
                    response.send(result)


                })


        }
    )

}


//
// MongoClient.connect(url, function (err, client) {
//     if (err)
//         return -1;
//     const ichimokuProjectDatabase : Db = client.db("IchimokuProject");
//     ichimokuProjectDatabase
//         .createCollection("")
//         .then((collection)=>{
//             collection.insertOne()
//         })
//
//


// let cursor   = ichimokuProjectDatabase
//     .collection("bitcoin")
//     // .insertOne({date:"notNow", money: {
//     //     euro : 1000
//     // } })
//     .updateMany({date: {$regex: "notNow"}},
//         { $set :{
//             "money.euro": 999
//         }
//
//
//         }
//     )
// .find({ "money.euro" : {$lte : 1000}});

// cursor.forEach((doc)=>{
//     console.log(doc);
//     client.close()
// })

// });
