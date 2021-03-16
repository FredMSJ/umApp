import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, public ngFireAuth: AngularFireAuth) {}

  signOut()
  {
    return this.ngFireAuth.signOut().then(() =>
    {
      localStorage.removeItem('user');
      this.router.navigate(['/login']);
    })
  }
}
