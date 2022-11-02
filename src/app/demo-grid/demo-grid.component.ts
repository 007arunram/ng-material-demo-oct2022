import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.scss'],
})
export class DemoGridComponent implements OnInit {
  myBreakPoint: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.myBreakPoint = window.innerWidth <= 600 ? 1 : 4;
  }

  handleSize(event: any) {
    this.myBreakPoint = event.target.innerWidth <= 600 ? 1 : 4;
  }
}
