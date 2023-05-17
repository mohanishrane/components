import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-box2',
  templateUrl: './check-box2.component.html',
  styleUrls: ['./check-box2.component.css'],
})
export class CheckBox2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
}
