import { Injectable } from '@angular/core';
import { iLabelValue } from '../models/labelValue';

@Injectable({
  providedIn: 'root'
})
export class OptionProviderService {

  constructor() { }

  getExams():iLabelValue[]{
    return [
      {
      label: 'IIT',
      value:'iit'
    },
      {
      label: 'NEET',
      value:'neet'
    },
      {
      label: '10th Board',
      value:'10board'
    },
      {
      label: '12th Board',
      value:'12board'
    }
  
  ]
  }
  getSubjects():iLabelValue[]{
    return [
      {
      label: 'Physics',
      value:'physics'
    },
      {
      label: 'Chemistry',
      value:'chemistry'
    },
      {
      label: 'Mathematics',
      value:'mathematics'
    },
      {
      label: 'Biology',
      value:'biology'
    }
  
  ]
  }
}
