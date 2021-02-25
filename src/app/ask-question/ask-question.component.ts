import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionModel } from '../Models/question.model';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent implements OnInit {

  questionForm: FormGroup;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.questionForm = fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  // For displaying notification
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
    });
  }

  get title(): AbstractControl {
    return this.questionForm.get('title');
  }

  get description(): AbstractControl {
    return this.questionForm.get('description');
  }

  addQuestion(): void {
    let question: QuestionModel[] = [];

    // A variable to hold the information to be stored into Local-storage.
    let payload: QuestionModel = {
      title: '',
      description: '',
      image: '',
      commentCounter: 0,
      starred: false
    };

   payload.title = this.title.value;
   payload.description = this.description.value;
    /*
      Image, commentCounter and Starred would be assigned to a
      newly created question randomly to mock an actual user.
    */

    // This acts as different users profile picture
   const users =  [ 'assets/img/img1.png', 'assets/img/img2.png', 'assets/img/img3.png', 'assets/img/img4.png']

  //  Getting the list of random users from users array above everytime a question is asked.
   const randomUserIndex = Math.floor(Math.random() * users.length );
   payload.image = users[randomUserIndex];

  //  Randomly generate comment counter
   payload.commentCounter = Math.floor(Math.random() * 500 );


  //  Generate a random boolean based on if any random number generated within 0-1 is greater than 0.5
   payload.starred = Math.random() < 0.5;

   question.push(payload);

  //  Check if localstorage is empty before adding
   if (!localStorage.getItem('questions')) {
    localStorage.setItem('questions', JSON.stringify(question));
   } else {
    question = [...question, ...JSON.parse(localStorage.getItem('questions'))];
    localStorage.setItem('questions', JSON.stringify(question));
   }

   this.openSnackBar('Question added successfully', 'close');

   this.questionForm.reset();


  }

}
