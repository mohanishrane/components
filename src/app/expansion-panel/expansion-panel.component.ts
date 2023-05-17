import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-expansion-panel',
  templateUrl: './expansion-panel.component.html',
  styleUrls: ['./expansion-panel.component.css'],
})
export class ExpansionPanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  panelOpenState = false;
  @ViewChild(MatAccordion) accordion: MatAccordion;
}
