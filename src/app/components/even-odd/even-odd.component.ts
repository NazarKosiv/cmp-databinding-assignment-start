import { Component, Input, OnInit } from '@angular/core';
import {EvenOddConstant} from '../../constants/even-odd.constant';

@Component({
  selector: 'app-even-odd',
  templateUrl: './even-odd.component.html',
  styleUrls: ['./even-odd.component.css']
})
export class EvenOddComponent implements OnInit {

  @Input() type: EvenOddConstant;
  @Input() numbers: number[];

  constructor() { }

  ngOnInit() {
  }

}
