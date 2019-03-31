import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-landing',
  templateUrl: './main-landing.component.html',
  styleUrls: ['./main-landing.component.css']
})
export class MainLandingComponent implements OnInit {
  mainBigPic = `url(../../../../assets/resPassRunCreek.jpg)`;

  constructor() { }

  ngOnInit() {
  }

}
