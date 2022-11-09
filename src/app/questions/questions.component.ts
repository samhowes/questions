import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

export class Question {
  public upVotes: number = 1
  public downVotes: number = 0

  constructor(
    public title: string,
    public description: string,
  ) {
  }
}

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  public questions: Array<Question> = []
  public newDescription = ''
  public newTitle = ''

  constructor(
    private snackBar: MatSnackBar
  ) {
    try {
      const str = localStorage.getItem('questions')
      if (str) {
        this.questions = JSON.parse(str!!) || []
      }
    } catch (err) {
      this.snackBar.open(err as string)
    }
  }

  public save() {
    const str = JSON.stringify(this.questions)
    localStorage.setItem('questions', str)
  }

  ngOnInit(): void {
  }

  upVote(q: Question) {
    q.upVotes++
    this.save()
  }

  downVote(q: Question) {
    q.downVotes++
    this.save()
  }

  addQuestion() {
    this.questions.push(new Question(this.newTitle, this.newDescription))
    this.save()
    this.newTitle = ''
    this.newDescription = ''
  }
}
