import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../models/question';

@Injectable({
  providedIn: 'root'
})
export class FormProviderService {

  constructor(private fb:FormBuilder) { }

  /**
   * @description gets the basic form from question
   * @param question 
   */
  getBasicQuestionForm(question:Question):FormGroup{
    const fg = this.fb.group(question);
    return fg;
  }

}
