import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Job } from '../../models/job-item';
import { FormGroup } from '@angular/forms';
import { FormProviderService } from '../../service/form-provider.service';

@Component({
  selector: 'app-job-apply-dialog',
  templateUrl: './job-apply-dialog.component.html',
  styleUrls: ['./job-apply-dialog.component.scss']
})
export class JobApplyDialogComponent {

  applicantForm :FormGroup = this.formProvider.getNewApplicantForm();
  constructor(@Inject(MAT_DIALOG_DATA) public job: Job, private formProvider:FormProviderService){}

  apply(){
    console.log(this.applicantForm.getRawValue());
  }
}
