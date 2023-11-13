import { Component } from '@angular/core';
import * as emailjs from '@emailjs/browser';


@Component({
  selector: 'app-page-contact',
  templateUrl: './page-contact.component.html',
  styleUrls: ['./page-contact.component.css'],
})
export class PageContactComponent {
  sendEmail(e: Event) {
    e.preventDefault();

    const templateParams = {
      name: (document.getElementById('name') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      message: (document.getElementById('message') as HTMLInputElement).value,      
    };
    console.log(templateParams);

    emailjs
      .send(
        'service_6mz454f',
        'template_g5mdgkk',
        templateParams,
        'FY1LT97hgJtKEL0-J'
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
        },
        (error) => {
          console.log('Error sending email:', error);
        }
      );
  }
}
