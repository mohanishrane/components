import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.css'],
})
export class ButtonToggleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  fontStyle?: string;
}
