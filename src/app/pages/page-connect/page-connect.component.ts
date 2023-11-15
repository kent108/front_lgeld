import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Token } from 'src/app/models/token';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { AuthInterceptorService } from 'src/app/services/auth-interceptor.service'; 

@Component({
  selector: 'app-page-connect',
  templateUrl: './page-connect.component.html',
  styleUrls: ['./page-connect.component.css'],
})
export class PageConnectComponent {
  mail!: string;
  password!: string;
  login!: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private AuthInterceptorService: AuthInterceptorService,
  ) {  }

  ngOnInit(): void {
    // Suppression de l'ancien token
    // this.authService.logout();
    this.initialForm();
  }

  private initialForm() { 
    this.login = this.fb.group({
      mail: ['', Validators.required],
      password: ['', Validators.required],
    });
  ;}

  onSubmit() {
   if (this.login.valid) {
     let mail = this.login.value.mail;
     let password = this.login.value.password;
     this.AuthInterceptorService.login(mail, password).subscribe({
       next: (response: any) => {
         console.log('Réponse complète du serveur :', response);
         if (response && response.accessToken) {
           localStorage.setItem('access_token', response.accessToken);
          //  localStorage.setItem('id', response.user.id);
          //  localStorage.setItem('access', response.user.access);
          //  localStorage.setItem('full_access', response.user.full_access);
           
           this.AuthInterceptorService.isConnected$.next(
             localStorage.getItem('access_token')
           );
           console.log('Connexion réussie et token stocké!');
           this.router.navigate(['/admin']);
           
         } else {
           console.error('Token non reçu dans la réponse.');
         }
       },
       error: (error: any) => {
         console.error('Erreur lors de la connexion:', error);
        
       },
     });
   }

    //    const userLogin: User = this.loginForm.value; // On récupère les données du formulaire
    //     console.log('je suis dans le submit, userLogin = ', userLogin);
    //     this.userService.loginUser(userLogin).subscribe(
    //       (res: Token) => {
    //         // On envoie l'utilisateur au serveur
    //         console.log('je suis dans le submit et je récupère res = ', res);
    //         const token = res.accessToken; // On récupère le token

    //         // Stocker le token dans le localStorage
    //         localStorage.setItem('token', token);

    // }
  }
}
