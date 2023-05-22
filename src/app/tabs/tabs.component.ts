import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Observable, Observer } from 'rxjs';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent implements OnInit {
  ngOnInit(): void {}
  lotsOfTabs = new Array(30).fill(0).map((_, index) => `Tab ${index}`);

  asyncTabs: Observable<ExampleTab[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<ExampleTab[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'First', content: 'Content 1' },
          { label: 'Second', content: 'Content 2' },
          { label: 'Third', content: 'Content 3' },
        ]);
      }, 1000);
    });
  }

  // links = ['First', 'Second', 'Third'];
  // activeLink = this.links[0];
  // background: ThemePalette = undefined;

  // toggleBackground() {
  //   this.background = this.background ? undefined : 'primary';
  // }

  // addLink() {
  //   this.links.push(`Link ${this.links.length + 1}`);
  // }
}
