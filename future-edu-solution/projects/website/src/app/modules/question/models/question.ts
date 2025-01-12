import { iQuestion } from "./iQuestion";

export class Question implements iQuestion {
    name: string;
    id: string;
    exams: string[];
    subject: string;
    difficulty: string;
    chapter: string;
    section: string;
    subSection: string;
    isEnable: boolean;
    version: string;
    createdBy: string;
    approvedBy: string;
    modifiedOn: string;
    modifiedBy: string;
    questionType: string;
    marks: number;
    questionText: string;
    questionStem: string;
    questionFeedback: string;
	constructor({name,id,exams,subject,difficulty,chapter,section,subSection,isEnable,version,createdBy,approvedBy,modifiedOn,modifiedBy,questionType,marks,questionText,questionStem,questionFeedback}:any) {
        this.name = name;
        this.id = id;
        this.exams = exams;
        this.subject = subject;
        this.difficulty=difficulty;
        this.chapter = chapter ;
        this.section = section;
        this.subSection = subSection;
        this.isEnable = !!isEnable;
        this.version = version;
        this.createdBy = createdBy;
        this.approvedBy = approvedBy;
        this.modifiedOn = modifiedOn;
        this.modifiedBy = modifiedBy;
        this.questionType = questionType;
        this.marks = marks;
        this.questionText = questionText;
        this.questionStem = questionStem;
        this.questionFeedback = questionFeedback;
    }
    
}