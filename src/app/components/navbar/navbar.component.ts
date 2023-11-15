import { Component } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isAdmin: boolean = false;
  

  constructor(private AuthGuardService: AuthGuardService,) { }

  ngOnInit(): void {
    
  }
}

