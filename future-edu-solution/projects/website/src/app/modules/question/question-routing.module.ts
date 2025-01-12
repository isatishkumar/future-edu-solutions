import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionComponent } from './component/question/question.component';

const routes: Routes = [
  {
    path:'add',
    component:QuestionComponent,
  },
  {
    path:'',
    redirectTo:'add',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionRoutingModule { }
