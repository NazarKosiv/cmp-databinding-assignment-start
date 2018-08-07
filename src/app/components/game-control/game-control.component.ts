import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Input() isGameStarted: boolean;
  @Output() public gameStarted = new EventEmitter();
  @Output() public gameStopped = new EventEmitter();
  @Output() public gameResetted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
