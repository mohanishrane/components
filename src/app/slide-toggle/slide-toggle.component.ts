import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-slide-toggle',
  templateUrl: './slide-toggle.component.html',
  styleUrls: ['./slide-toggle.component.css'],
})
export class SlideToggleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  color: ThemePalette = 'accent';
  checked = false;
  disabled = false;
}
