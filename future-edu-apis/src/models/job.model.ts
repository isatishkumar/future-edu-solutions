import { Schema, model } from "mongoose";

export interface iJob {
    id:string;
    title: string;
    type: string;
    minExperience: number;
    maxExperience: number;
    position: string;
    minSalary: number;
    maxSalary: number;
    salaryFrequency: string;
    location: string;
    active:boolean;
    postedAt: string;
    postedBy: string;
}

export const JobSchema = new Schema<iJob>(
    {
        title: {type:String,required:true},
        type: {type:String,required:true},
        minExperience: {type:Number,required:true},
        maxExperience: {type:Number,required:true},
        position: {type:String,required:true},
        minSalary: {type:Number,required:true},
        maxSalary: {type:Number,required:true},
        salaryFrequency: {type:String},
        location: {type:String,required:true},
        active:{type:Boolean},
        postedAt: {type:String},
        postedBy: {type:String}
    }, {
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals:true
        },
        timestamps:true
    }
)

export const JobModel = model<iJob>('job',JobSchema);