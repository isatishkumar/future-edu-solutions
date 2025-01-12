import { Component, OnInit } from '@angular/core';
import { JobApiService } from '../../../data-provider/service/job-api.service';
import { Job } from '../../models/job-item';
import { MatDialog } from '@angular/material/dialog';
import { JobApplyDialogComponent } from '../job-apply-dialog/job-apply-dialog.component';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit{

  allJobs$ = this.jobApi.getAllJobs();
  tags = [
    {
      text:'Physics',
      logo:''
    },
    {
      text:'Chemistry',
      logo:''
    },
    {
      text:'Maths',
      logo:''
    },
    {
      text:'HOD',
      logo:''
    },
    {
      text:'Assistant Professor',
      logo:''
    },
    {
      text:'Biology',
      logo:''
    },
  ];

  
  constructor(private jobApi:JobApiService, private dialog:MatDialog){}
  ngOnInit(): void {
  }


  /**
   * @description apply for a new job
   * @param job 
   */
  applyNow(job:Job){
   const dialogRef =  this.dialog.open(JobApplyDialogComponent,
    {
      data: job,
      enterAnimationDuration: '100ms',
      exitAnimationDuration: '100ms',
      width: '70vw',
      height:'88vh'
    });

  }
}
