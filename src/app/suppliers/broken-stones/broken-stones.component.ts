import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/_models/ColorEnum';

@Component({
  selector: 'app-broken-stones',
  templateUrl: './broken-stones.component.html',
  styleUrls: ['./broken-stones.component.scss']
})
export class BrokenStonesComponent implements OnInit {

  colors: Color[] = [
    Color.Cyan,
    Color.Cyan,
    Color.Magenta,
    Color.White,
    Color.Yellow,
    Color.White,
    Color.Yellow,
    Color.White,
    Color.Orange
  ]

  constructor() { }

  ngOnInit() {
  }

  takeAll(colorToTake: Color) {
    this.colors = this.colors.filter(c => c !== colorToTake);
  }

}
