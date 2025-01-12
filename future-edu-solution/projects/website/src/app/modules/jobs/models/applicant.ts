export interface iApplicant {
    id:string;
    salutation:string;
    name:string;
    jobid:string;
    phone:string;
    email:string;
    address:string;
    resume:string;
    about:string;
}

export class Applicant implements iApplicant{
    id: string;
    salutation: string;
    name: string;
    jobid: string;
    phone: string;
    email: string;
    address: string;
    resume: string;
    about: string;
    updatedAt:string;
    constructor({id,salutation,name,jobid,phone,email,address,resume,about,updatedAt}:any){
        this.id = id;
        this.salutation = salutation || 'mr';
        this.name = name;
        this.jobid = jobid;
        this.phone = phone;
        this.email = email;
        this.address = address;
        this.resume = resume;
        this.about = about;
        this.updatedAt = updatedAt;
    }
}