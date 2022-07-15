import { Component, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myProperty: string;
  constructor() {}
  isShown: boolean = false; // hidden by default

  clickEvent() {
    this.isShown = !this.isShown;
    this.myProperty = '';
    return this.myProperty;
  }

  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  displayOutput = '';
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = array[i];
      array[j] = array[i];
      array[i] = temp;
    }
    return array;
  }
  ngOnInit() {
    let shuffle = this.shuffleArray(this.numbers).slice(0, 4).join('');
    this.values = shuffle;
    for (let i = 0; i < shuffle.length; i++) {
      var outputHTMl = '';
      outputHTMl += shuffle[i];
      if (shuffle[i] == myProperty[i]) {
        displayOutput += '+';
      } else {
        displayOutput += '-';lk
      }
    }
    this.output = displayOutput;
  }
}
