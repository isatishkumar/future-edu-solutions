import { Component, OnInit } from '@angular/core';
import { FormProviderService } from '../../services/form-provider.service';
import { FormGroup } from '@angular/forms';
import { Question } from '../../models/question';
import Editor from 'ckeditor5-custom-build/build/ckeditor';
import { OptionProviderService } from '../../services/option-provider.service';
import { CKEDITOR_CONFIG } from '../../models/ckeditor-config';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  question:Question = new Question({});
  questionFrom!: FormGroup;
  examOptions = this.optionProvider.getExams();
  subjectOptions = this.optionProvider.getSubjects();
  editor = Editor;
  config = CKEDITOR_CONFIG as any;
  constructor(
    private formProvider:FormProviderService,
    private optionProvider:OptionProviderService
    ){}
 
  ngOnInit(): void {
    this.questionFrom = this.formProvider.getBasicQuestionForm(this.question);
  }
  

}
