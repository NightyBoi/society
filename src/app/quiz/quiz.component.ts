import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.scss'
})
export class QuizComponent {

  selectedMultiple: string[] = [];
  yesSelected = false;
  onlySelected = true;

  quizProgress = 0;
  userAnswers: [{
    answers: string[],
    extra: string
  }] = [{answers: [], extra: ""}];

  quizQuestions = 
  [
    {
      type: "2-choice",
      question: "What Is Your Biological Sex?",
      answers: ["Female", "Male"],
      extraQuestion: "",
      extra: ""
    },
    {
      type: "2-choice",
      question: "Are You Currently Pregnant Or Planning To Become Pregnant?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: ""
    },
    {
      type: "2-choice",
      question: "Are You Planning To Conceive Within The Next 6 Months?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: ""
    },
    {
      type: "select",
      question: "What Are Your Current Skin Concerns?",
      answers: ["Acne", "Anti-aging", "Rosacea", "Melasma"],
      extraQuestion: "Or share with us other skin conditions you are managing",
      extra: "Tell us how we can help…"
    },
    {
      type: "2-choice",
      question: "Are You Currently Using Any Retinol-Containing Products?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: ""
    },
    {
      type: "2-choice",
      question: "Do You Have Sensitive Skin Or Skin That Is Easily Irritated?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: ""
    },
    {
      type: "2-choice-plus",
      question: "Do You Have Any Known Sensitivities Or Allergies To Skincare Ingredients?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: "Please share what ingredients you may be sensitive or allergic to"
    },
    {
      type: "2-choice-plus",
      question: "Have You Been Diagnosed With Any Skin Or Other Medical Conditions?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: "Please share what medical conditions are you currently managing"
    },
    {
      type: "2-choice-plus",
      question: "Are You Presently Taking Any Medications?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: "Please share what medications you are presently taking."
    },
    {
      type: "list",
      question: "Please List Your Allergies And Reaction To Allergens.",
      answers: [],
      extraQuestion: "",
      extra: "Ex: Penicillin - Hives"
    },
    {
      type: "measure",
      question: "What Is Your Height And Current Weight?",
      answers: [],
      extraQuestion: "",
      extra: ""
    },
    {
      type: "list",
      question: "What Is Your Primary Care Provider?",
      answers: [],
      extraQuestion: "",
      extra: "Ex: Dr. John Smith"
    },
    {
      type: "photo",
      question: "ID Photo",
      answers: [],
      extraQuestion: "",
      extra: "Please upload a clear photo of a valid government-issued photo ID."
    },
    {
      type: "photo",
      question: "Front-Facing Photo",
      answers: [],
      extraQuestion: "",
      extra: "We'd like to assess your skin comprehensively. Please upload a front-facing photo of yourself with a bare face."
    },
    {
      type: "photo",
      question: "Areas Of Concern",
      answers: [],
      extraQuestion: "",
      extra: "Now let's get a closer look. Please upload a photo highlighting your areas of concern."
    },
    {
      type: "2-choice-plus",
      question: "Do You Have Any Specific Questions Or Comments For Your Dermatologist?",
      answers: ["Yes", "No"],
      extraQuestion: "",
      extra: "Enter your question..."
    },
  ]


  next(chosenAnswers: string[] | null, index: number){
    this.quizProgress++;
    this.onlySelected = true;

    if(chosenAnswers != null){

      if(index >= this.userAnswers.length){
        this.userAnswers.push({answers: chosenAnswers, extra: ""});
      }else{
        this.userAnswers[index] = {answers: chosenAnswers, extra: ""};
      }

      this.yesSelected = false;
      console.log(this.userAnswers);
    }
  }

  nextSelect(index: number, comment: string){

    if(this.selectedMultiple.length > 0){
      this.quizProgress++;
      this.selectedMultiple.push(comment);

      if(index >= this.userAnswers.length){
        this.userAnswers.push({answers: this.selectedMultiple, extra: comment});
      }else{
        this.userAnswers[index] = {answers: this.selectedMultiple, extra: comment};
      }

      console.log(this.userAnswers);
    }else if(comment != ''){
      this.quizProgress++;
      this.selectedMultiple.push(comment);

      if(index >= this.userAnswers.length){
        this.userAnswers.push({answers: this.selectedMultiple, extra: comment});
      }else{
        this.userAnswers[index] = {answers: this.selectedMultiple, extra: comment};
      }

      this.onlySelected = true;
      this.selectedMultiple = [];
      console.log(this.userAnswers);
    }
  }

  nextComment(index: number, comment: string){

    if(comment != ''){
      this.quizProgress++;

      if(index >= this.userAnswers.length){
        this.userAnswers.push({answers: [comment], extra: comment});
      }else{
        this.userAnswers[index] = {answers: [comment], extra: comment};
      }

      this.onlySelected = true;
      this.yesSelected = false;
      console.log(this.userAnswers);
    }
  }

  nextMeasure(index: number, measurments: string[]){
    if(measurments[0] != '' && measurments[1] != '' && measurments[2] != ''){
      this.quizProgress++;

      if(index >= this.userAnswers.length){
        this.userAnswers.push({answers: measurments, extra: ""});
      }else{
        this.userAnswers[index] = {answers: measurments, extra: ""};
      }

      console.log(this.userAnswers);
    }
  }

  nextSkip(index: number){
    this.quizProgress++;

    if(index >= this.userAnswers.length){
      this.userAnswers.push({answers: [], extra: ""});
    }else{
      this.userAnswers[index] = {answers: [], extra: ""};
    }
    
    console.log(this.userAnswers);
  }

  back(){
    this.quizProgress--;
  }

  selectPlus(){
    this.onlySelected = false;
    this.yesSelected = true;
  }

  chooseSelect(chosen: string){
    if(this.selectedMultiple.includes(chosen)){
      let index;
      index = this.selectedMultiple.findIndex(item => item == chosen);
      this.selectedMultiple.splice(index, 1);
    }else{
      this.selectedMultiple.push(chosen);
    }
  }
}
