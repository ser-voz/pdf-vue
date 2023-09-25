import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/records.js";
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);


const PORT = 3000;
const DB_URL = 'mongodb://localhost:27017/pdf';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))

app.use('/api/records', router);

app.use('/', express.static(__dirname + './dist'));

async function startApp() {
    try {
        // options for mongoose.connect
        //{ useUnifiedTopology: true, useNewUrlParser: true }
        await mongoose.connect(DB_URL)
            .then(db => console.log('DB is connected'))
            .catch(err => console.error(err));
        app.listen(PORT, () => {
            console.log(__dirname+'../dist');
            console.log('Server started on port '+PORT);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp().then(r => console.log('Working'));
