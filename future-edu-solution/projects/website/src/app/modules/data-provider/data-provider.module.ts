import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApiService } from './service/job-api.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DataInterceptor } from './interceptor/data.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
providers:[
  JobApiService,
  { provide: HTTP_INTERCEPTORS, useClass: DataInterceptor, multi: true },
]
})
export class DataProviderModule { 
  static forRoot(): ModuleWithProviders<DataProviderModule> {
    return {
      ngModule: DataProviderModule,
      providers: [
       JobApiService
      ]
    };
  }
}
