import { Component, OnInit } from '@angular/core';
import {
  MatSnackBar,
  MatSnackBarRef,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.css'],
})
export class SnackBarComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar /*private snackBarRef:MatSnackBarRef*/
  ) {}

  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  durationInSeconds = 5;

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  openSnackBar1() {
    this._snackBar.open('Cannonball!!', 'Splash', {
      //duration: 3000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
  // snackBarRef.afterDismissed().subscribe(() => {
  //   console.log('The snackbar was dismissed');
  // });

  // snackBarRef.onAction().subscribe(() => {
  //   console.log('The snackbar action was triggered!');
  // });

  openSnackBar2() {
    this._snackBar.openFromComponent(PizzaPartyComponent, {
      duration: this.durationInSeconds * 1000,
    });
  }

  ngOnInit(): void {}
}

@Component({
  selector: 'snack-bar-component-example-snack',
  //templateUrl: 'snack-bar-component-example-snack.html',
  template: `<span class="example-pizza-party"> Pizza party!!! 🍕 </span>`,
  styles: [
    `
      .example-pizza-party {
        color: hotpink;
      }
    `,
  ],
})
export class PizzaPartyComponent {}
