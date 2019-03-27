import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-typer',
  templateUrl: './auto-typer.component.html',
  styleUrls: ['./auto-typer.component.css']
})
export class AutoTyperComponent implements OnInit {
typedStrings: Array<string> = [];
loopNum = 0;
txt = '';
isDeleting = false;
toRotate: any;

  constructor() { }

  ngOnInit() {
  }

  tick(el, loop, period) {
    let i = this.loopNum % this.toRotate.length;
    let fullText = this.toRotate[i];
    if (this.isDeleting) {
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullText.substring(0, this.txt.length + 1);
    }
  }

}
