import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../../jobs/models/job-item';

@Injectable()
export class JobApiService {
  basePath = 'api/jobs/';
  constructor(private http:HttpClient) { }

  /**
   * @description returns all jobs
   * @returns 
   */
  getAllJobs():Observable<Job[]>{
    return this.http.get<Job[]>(this.basePath+'getAllJobs');
  }

  /**
   * 
   * @param payload 
   * @returns 
   */
  createNewJob(payload:Job):Observable<any>{
    const path = this.basePath+`create`;
    return  this.http.post<any>(path,payload);
  }
}
