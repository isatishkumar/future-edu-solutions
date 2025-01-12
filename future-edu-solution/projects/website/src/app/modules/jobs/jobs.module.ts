import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './components/jobs/jobs.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NewJobComponent } from './components/new-job/new-job.component';
import { DataProviderModule } from '../data-provider/data-provider.module';
import { SharedModule } from '../shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { JobApplyDialogComponent } from './components/job-apply-dialog/job-apply-dialog.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [ 
    JobsComponent,
    NewJobComponent,
    JobApplyDialogComponent
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatStepperModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    DataProviderModule,
    MatSnackBarModule,
    MatDialogModule,
    SharedModule,
    MatIconModule
  ]
})
export class JobsModule { }
