import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css'],
})
export class ProgressBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  color: ThemePalette = 'warn';
  mode: ProgressBarMode = 'determinate';
  value = 50;
  bufferValue = 75;
}
