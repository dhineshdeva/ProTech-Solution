import { Component, OnInit } from '@angular/core';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-allfeedback',
  templateUrl: './allfeedback.component.html',
  styleUrls: ['./allfeedback.component.css']
})
export class AllfeedbackComponent implements OnInit {

  feedbacks: any[] = [];
  showDeletePopup = false;
  feedbackToDelete: string;

  constructor(private feedbackService: FeedbackService) { }

  ngOnInit(): void {
    this.getUserFeedback();
  }

  getUserFeedback() {
    const userId = localStorage.getItem('userId');
    console.log(userId);
    
    this.feedbackService.getFeedbacks().subscribe(
      (data: any) => {
        this.feedbacks = data;
        console.log(this.feedbacks);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
