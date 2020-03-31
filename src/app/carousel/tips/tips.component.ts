import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {

  constructor(private authService:AuthService,private router: Router) { }

  ngOnInit() {

  }

  loggedIn() {
    if (this.authService.loggedIn) {
      this.router.navigate(['/donor-registration']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }

}
