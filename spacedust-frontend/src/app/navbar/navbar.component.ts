import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
    // this.authService.logout().subscribe(
    //   _ => {
    //     this.router.navigate(['login']);
    //   },
    //   err => {
    //     alert(err.err.message);
    //   }
    // );
  }

}
