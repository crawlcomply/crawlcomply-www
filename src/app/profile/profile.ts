import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements AfterViewInit {
  access_token: string = "";
  refresh_token: string = "";

  ngAfterViewInit() {
    this.access_token = localStorage.getItem("access_token") as string;
    this.refresh_token = localStorage.getItem("refresh_token") as string;
  }
}
