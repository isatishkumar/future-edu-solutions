import { dbConnect } from "./configs/database.config";
import express from "express";
import cors from "cors";
import jobRouter from "./routers/job.router";
dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200","http://futureedusolutions.com"]
}));

app.use("/api/jobs",jobRouter);
app.use(express.static('public'));

const port = process.env.PORT || 5000;
app.listen(port, ()=> {
    console.log("website served on http://localhost:"+port)
});