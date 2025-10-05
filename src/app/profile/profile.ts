import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { LocalStorage } from '../local-storage';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  standalone: true
})
export class Profile implements OnInit {
  private readonly localStorage = inject(LocalStorage);
  access_token: string = "";
  refresh_token: string = "";

  ngOnInit() {
    this.access_token = this.localStorage.getItem("access_token") ?? "";
    this.refresh_token = this.localStorage.getItem("refresh_token") ?? "";
  }
}
