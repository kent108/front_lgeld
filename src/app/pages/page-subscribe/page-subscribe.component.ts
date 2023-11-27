import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { phoneNumberValidator } from 'src/app/validators/phone-number.validator';

@Component({
  selector: 'app-page-subscribe',
  templateUrl: './page-subscribe.component.html',
  styleUrls: ['./page-subscribe.component.css'],
})
export class PageSubscribeComponent {
  inscriptionForm = this.fb.group({
    admin: [false],
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    mail: ['', Validators.required],
    password: ['', Validators.required],
    phone: ['', phoneNumberValidator()],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      const newUser: any = this.inscriptionForm.value; // On récupère les données du formulaire
      
      this.userService.subscribe(newUser).subscribe(() => {
        // On envoie les données du formulaire au serveur
        
      });

      this.inscriptionForm.reset(); // On vide le formulaire
    }
  }

  goToHome() {
    close();
    window.location.href = 'login';
  }
}
