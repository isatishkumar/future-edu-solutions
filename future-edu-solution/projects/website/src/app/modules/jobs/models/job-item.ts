export interface iJob {
    id:string;
    title: string;
    type: string;
    minExperience: number;
    maxExperience: number;
    position: string;
    minSalary: number;
    maxSalary: number;
    salaryFrequency:string;
    location: string;
    postedAt: string;
    postedBy: string;
    active:boolean;
}

export class Job implements iJob{
    id:string;
    title: string;
    type: string;
    minExperience: number;
    maxExperience: number;
    position: string;
    minSalary: number;
    maxSalary: number;
    location: string;
    postedAt: string;
    postedBy: string;
    salaryFrequency: string;
    active: boolean;
    updatedAt:string;
    constructor({id, active,title,type,minExperience,maxExperience,position,minSalary,maxSalary,salaryFrequency,location,postedAt,postedBy,updatedAt}:any){
        this.id =id;
        this.title = title;
        this.type = type;
        this.minExperience = minExperience;
        this.maxExperience = maxExperience;
        this.position = position;
        this.minSalary = minSalary;
        this.maxSalary = maxSalary;
        this.location = location;
        this.postedAt = postedAt;
        this.postedBy = postedBy;
        this.salaryFrequency = salaryFrequency;
        this.active = active === undefined ? true : active;
        this.updatedAt = updatedAt;
    }
}