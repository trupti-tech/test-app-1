import mongoose from "mongoose";
import express from "express";

let conn = await mongoose.connect("mongodb+srv://hitarthganatra123:abcd123@testcluster.mpoypll.mongodb.net/");

const app = express();
const port = 3131;

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})