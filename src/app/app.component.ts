import { Component } from '@angular/core';
import {EvenOddConstant} from './constants/even-odd.constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public evenOddType = EvenOddConstant;
  public oddNumbers: number[] = [];
  public evenNumbers: number[] = [];
  public game: any;
  public gameStarted = false;

  constructor() {}

  public startGame(): void {
    this.gameStarted = true;
    this.game = setInterval(() => {
      this.addEven();
      this.addOdd();
    }, 1000);
  }

  public stopGame(): void {
    clearInterval(this.game);
    this.gameStarted = false;
  }

  public resetGame(): void {
    if (this.game) {
      this.stopGame();
    }
    if (this.oddNumbers.length) {
      this.oddNumbers = [];
    }
    if (this.evenNumbers.length) {
      this.evenNumbers = [];
    }
  }

  private addOdd(): void {
    if (!this.oddNumbers.length) {
      this.oddNumbers.push(1);
      return;
    }
    this.oddNumbers.push(this.oddNumbers[this.oddNumbers.length - 1] + 2);
  }

  private addEven(): void {
    if (!this.evenNumbers.length) {
      this.evenNumbers.push(2);
      return;
    }
    this.evenNumbers.push(this.evenNumbers[this.evenNumbers.length - 1] + 2);
  }
}
