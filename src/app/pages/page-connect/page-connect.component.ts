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
        
         if (response && response.accessToken) {
           localStorage.setItem('access_token', response.accessToken);
                     
           this.AuthInterceptorService.isConnected$.next(
             localStorage.getItem('access_token')
           );
          ;
           this.router.navigate(['/admin']);
           
         } else {
           
         }
       },
       error: (error: any) => {
        
        
       },
     });
   }
  }
}
