import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Job } from '../models/job-item';
import { Applicant } from '../models/applicant';

@Injectable({
  providedIn: 'root'
})
export class FormProviderService {

  constructor(private fb:FormBuilder) { }

  getNewJobForm(job?:Job):FormGroup{
    job = job || new Job({});
    const fg =  this.fb.group(job);
    fg.controls.title.addValidators(Validators.required);
    fg.controls.type.addValidators(Validators.required);
    fg.controls.minExperience.addValidators(Validators.required);
    fg.controls.maxExperience.addValidators(Validators.required);
    fg.controls.minSalary.addValidators(Validators.required);
    fg.controls.maxSalary.addValidators(Validators.required);
    fg.controls.location.addValidators(Validators.required);
    fg.controls.postedAt.addValidators(Validators.required);
    return fg;    
  } 

 /**
  * 
  * @param applicant 
  * @returns formGroup
  */
  getNewApplicantForm(applicant?:Applicant):FormGroup{
    applicant = applicant || new Applicant({});
    const fg = this.fb.group(applicant);
    fg.controls.name.addValidators(Validators.required);
    fg.controls.phone.addValidators([Validators.required, Validators.maxLength(13)]);
    fg.controls.email.addValidators([Validators.required, Validators.email]);
    return fg;
  }

}
