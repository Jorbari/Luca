import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { QuestionModel } from './Models/question.model';


@Injectable({
  providedIn: 'root'
})
export class CommunityService {

  constructor(private httpClient: HttpClient) { }

  // method to make calls to the server
  getQuestions(): Observable<QuestionModel[]> {
    const url = `${environment.apiUrl}/questions`;
    console.log(url);
    return this.httpClient.get<QuestionModel[]>(url);
  }

}
