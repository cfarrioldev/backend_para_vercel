const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const Saga = require("../api/models/sagas.model");

const DB_URL = process.env.DBURL;

const arraySagas =
    [
    {
        nameSaga: "Robot",
        books: ["65d04b83df98fdc5ccb2ea94","65d04b83df98fdc5ccb2ea95","65d04b83df98fdc5ccb2ea96","65d04b83df98fdc5ccb2ea97","65d04b83df98fdc5ccb2ea98","65d04b83df98fdc5ccb2ea9d",]
    },
    {
        nameSaga: "Galactic Empire Series",
        books: ["65d04b83df98fdc5ccb2ea99","65d04b83df98fdc5ccb2ea9a","65d04b83df98fdc5ccb2ea9b","65d04b83df98fdc5ccb2ea9c"]
    },
    {
        nameSaga: "Foundation Trilogy",
        books: ["65d04b83df98fdc5ccb2ea9e","65d04b83df98fdc5ccb2ea9f","65d04b83df98fdc5ccb2eaa0","65d04b83df98fdc5ccb2eaa5","65d04b83df98fdc5ccb2eaa6","65d04b83df98fdc5ccb2eaa7","65d04b83df98fdc5ccb2eaa8","65d04b83df98fdc5ccb2eaa9"]
    },
        {
        nameSaga: "Robot Series",
        books: ["65d04b83df98fdc5ccb2eaa1","65d04b83df98fdc5ccb2eaa2","65d04b83df98fdc5ccb2eaa3","65d04b83df98fdc5ccb2eaa4"]
    },
    {
        nameSaga: "Foundation Secound Trilogy",
        books: ["65d04b83df98fdc5ccb2eaaa","65d04b83df98fdc5ccb2eaab","65d04b83df98fdc5ccb2eaac"]
    },
    {
        nameSaga: "Uplift Saga",
        books: ["65d04b83df98fdc5ccb2eaaf","65d04b83df98fdc5ccb2eab0",""]
    },
    {
        nameSaga: "Uplift Trilogy",
        books: ["65d04b83df98fdc5ccb2eab1","65d04b83df98fdc5ccb2eab2","65d04b83df98fdc5ccb2eab3","65d04b83df98fdc5ccb2eab4"]
    },
    {
        nameSaga: "The Expanse",
        books: ["65d04b83df98fdc5ccb2eab6","65d04b83df98fdc5ccb2eab7","65d04b83df98fdc5ccb2eab8","65d04b83df98fdc5ccb2eab9","65d04b83df98fdc5ccb2eaba","65d04b83df98fdc5ccb2eabb","65d04b83df98fdc5ccb2eabc","65d04b83df98fdc5ccb2eabd","65d04b83df98fdc5ccb2eabe","65d04b83df98fdc5ccb2eabf"]
    },
    {
        nameSaga: "Old Man's War Series",
        books: [,"65d04b83df98fdc5ccb2eac0","65d04b83df98fdc5ccb2eac1","65d04b83df98fdc5ccb2eac2","65d04b83df98fdc5ccb2eac3","65d04b83df98fdc5ccb2eac4","65d04b83df98fdc5ccb2eac5"]
    },
    {
        nameSaga: "Lock In Series",
        books: []
    },
    {
        nameSaga: "The Galactic Center Saga",
// TODO books: 
    },
    {
        nameSaga: "Seafort Saga",
// TODO books: 
    },
    {
        nameSaga: "Gaunt's Ghosts",
// TODO books: 
    },
    {
        nameSaga: "Ender's Saga",
// TODO books: 
    },
    {
        nameSaga: "Shadow Saga",
// TODO books: 
    },
    {
        nameSaga: "Hyperion Cantos",
// TODO books: 
    },
    {
        nameSaga: "Forever War Series",
// TODO books: 
    },
    {
        nameSaga: null,
        books: []
    },
    {
        nameSaga: "The Interdependency Series",
        books: []
    },
    {
        nameSaga: "Dune Chronicles",
        books: []
    },
    {
        nameSaga: "Prelude to Dune",
        books: []
    },
    {
        nameSaga: "Honoverso",
// TODO books: 
    },
]


mongoose.connect(DB_URL)
  // Para que funcione hay que poner la URL en String, da fallo la importacion
    .then(async () => {
        const allSagas = await Saga.find();
        if (allSagas.length > 0) {
            await Saga.collection.drop();
            console.log("deleted sagas");
        }
    })
    .catch((error) => console.log("error deleting Sagas", error))
    .then(async () => {
        const SagaMap = arraySagas.map((saga) => new Saga(saga));
        await Saga.insertMany(SagaMap);
        console.log("Sagas addins");
    })
    .catch((error) => console.log("error adding Sagas", error))
    .finally(() => mongoose.disconnect());