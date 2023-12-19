import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-resume-send',
  templateUrl: './resume-send.component.html',
  styleUrls: ['./resume-send.component.css']
})
export class ResumeSendComponent {
  multiText?: string;
  job_role?: string;
  subject?: string;
  currentDate: Date = new Date();


  ngOnInit (): void {
  }

  generateText(): void {
    this.job_role ??= "Web Developer";
    if ( !this.job_role ) {
      this.job_role = "Web Developer";
    }
    this.subject = `Interest in ${ this.job_role } - Almasin, Mark Anthony C.`;
    this.multiText = `${new DatePipe('en-US').transform(this.currentDate, 'MMMM d, yyyy')}\n\nDear Sir/Madam,\n\nI am writing to express my interest in the ${this.job_role} position. I am a fast learner, organized, reliable, and self-motivated. I enjoy working collaboratively as part of a team but can also excel when working independently.\n\nAttached to this email is a copy of my resume for your review and consideration. I am eager to have the opportunity to meet with you to learn more about the company, its plans and goals, and how I can contribute to its continued success. Given this opportunity, I believe I can be an ideal candidate for the position.\n\nThank you for considering my application.\n\nRespectfully,\nMark Anthony C. Almasin\n+639653588851\nmacalmasin@gmail.com`;
  }
}
/*
December 16, 2023

Dear Sir/Madam,

I am writing to express my interest in the Software Developer position. I am a fast learner, organized, reliable, and self-motivated. I enjoy working collaboratively as part of a team but can also excel when working independently.

Attached to this email is a copy of my resume for your review and consideration. I am eager to have the opportunity to meet with you to learn more about the company, its plans and goals, and how I can contribute to its continued success. Given this opportunity, I believe I can be an ideal candidate for the position.

Thank you for considering my application.

Respectfully,
Mark Anthony C. Almasin
+639653588851
macalmasin@gmail.com
*/