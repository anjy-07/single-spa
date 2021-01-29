import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app2-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app2';
  constructor(private router: Router){}
  route() {
    console.log("d")
    this.router.navigateByUrl("/app2/lazy");
  }
}
