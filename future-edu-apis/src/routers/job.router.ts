import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { JobModel } from '../models/job.model';
import { HTTP_SUCCESS } from '../constants/http_status';
const router = Router();

router.get("/getAllJobs", asyncHandler(
    async (req, res) =>{
        const jobs = await JobModel.find();
        res.status(HTTP_SUCCESS).send(jobs);
    }
))

router.post('/create',asyncHandler(async (req:any,res:any)=>{
    console.log(req); 
    const newJobPayload  = req.body;
    const newJob = new JobModel({...newJobPayload});
    await newJob.save();
    res.send(newJob);
}))

export default router;