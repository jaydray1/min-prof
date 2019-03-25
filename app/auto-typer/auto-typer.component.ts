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

  constructor() { }

  ngOnInit() {
  }

  textType(el, loop, period) {

  }

}
