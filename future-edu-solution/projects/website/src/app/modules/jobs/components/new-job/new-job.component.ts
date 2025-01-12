import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormProviderService } from '../../service/form-provider.service';
import { iLabelValue } from '../../../question/models/labelValue';
import { JobApiService } from '../../../data-provider/service/job-api.service';
import { Job } from '../../models/job-item';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-new-job',
  templateUrl: './new-job.component.html',
  styleUrls: ['./new-job.component.scss']
})
export class NewJobComponent implements OnInit{
  jobForm!: FormGroup;
  ref!:MatSnackBarRef<SimpleSnackBar>;
  typeOptions:iLabelValue[] = [
    {label:"Full time",value:"Full time"},
    {label:"Part time",value:"Part time"},
    {label:"Contract",value:"Contract"}
  ]
  salaryOptions:iLabelValue[] = [
    {label:"Per Month",value:"Per month"},
    {label:"Per Year",value:"Per year"},
    {label:"One time",value:"One time"}
  ]
  constructor(private jobApi:JobApiService,private formProvider:FormProviderService, private snackbar:MatSnackBar){
  }
  ngOnInit(): void {
    this.jobForm = this.formProvider.getNewJobForm();
  }
  
  
  preFilldata(){
    const job = new Job( {
      title:'Botany Faculty for Bikaner',
      type:'Full time',
      minExperience: 3,
      maxExperience: 6,
      position:'Botany Faculty',
    minSalary:6000,
    maxSalary:8000,
    salaryFrequency:'Per month',
    location:'Bikaner - Rajesthan'
  });
  this.jobForm =  this.formProvider.getNewJobForm(job);
}

/**
 * @description submit the form
*/
  submit():void{
    const payload = this.jobForm.getRawValue();
    this.jobApi.createNewJob(payload).subscribe(res=>{
      this.ref =  this.snackbar.open('Job added sucessfully!',undefined, {duration:2500});
      this.ref.afterDismissed().subscribe(()=>{
        this.jobForm = this.formProvider.getNewJobForm();
      });
    });
  }
}
