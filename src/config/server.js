import express from "express";
import cors from 'cors';
import dotenv from "dotenv";

const app = express();
const env = dotenv.config(); 

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

module.exports = { app, env, express };