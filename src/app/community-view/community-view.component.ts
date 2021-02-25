import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../community.service';
import { QuestionModel } from '../Models/question.model';

@Component({
  selector: 'app-community-view',
  templateUrl: './community-view.component.html',
  styleUrls: ['./community-view.component.scss']
})
export class CommunityViewComponent implements OnInit {

  listOfQuestions: QuestionModel[] = [];

  constructor(private communityService: CommunityService) { }

  ngOnInit(): void {

    if (localStorage.getItem('questions')) {
      this.listOfQuestions = JSON.parse(localStorage.getItem('questions'));
     }

    this.getQuestions();
  }

  // method to get the list of questions from the DB(Database)/File
  getQuestions(): void {
    this.communityService.getQuestions().subscribe(
      res => {
        this.listOfQuestions = [...this.listOfQuestions, ...res];
      },
      err => {
        console.log(err);
      }
    )
  }

}
