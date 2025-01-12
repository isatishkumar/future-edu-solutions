import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CenterMainComponent } from './components/center-main/center-main.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
   component:HomeComponent,
   children:[
    {
      path:'home',
      component:CenterMainComponent
    },
    {
      path:'jobs',
      loadChildren:()=> import('../modules/jobs/jobs.module').then(m=>m.JobsModule)
    },
    {
      path:'about',
      loadChildren:()=> import('../modules/about-us/about-us.module').then(m=>m.AboutUsModule)
    },
    {
      path:'question',
      loadChildren:()=> import('../modules/question/question.module').then(m=>m.QuestionModule)
    },
    {
      path:'',
      redirectTo: 'home',pathMatch:'full'
    }
   ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
