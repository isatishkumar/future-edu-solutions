import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobsComponent } from './components/jobs/jobs.component';
import { NewJobComponent } from './components/new-job/new-job.component';


const routes: Routes = [
  {
    path:'',
    component:JobsComponent
  },
  {
    path:'create',
    component:NewJobComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobsRoutingModule { }
