import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/_models/Supplier';
import { Color } from 'src/app/_models/ColorEnum';

@Component({
  selector: 'app-suppliers-container',
  templateUrl: './suppliers-container.component.html',
  styleUrls: ['./suppliers-container.component.scss']
})
export class SuppliersContainerComponent implements OnInit {

  suppliers: Supplier[] = [
    {
      colors: [
        Color.Cyan,
        Color.Magenta,
        Color.Orange,
        Color.White
      ]
    },
    {
      colors: [
        Color.White,
        Color.Yellow
      ]
    },
    {
      colors: [
        Color.Cyan,
        Color.Orange,
        Color.Yellow,
        Color.Magenta
      ]
    },
    {
      colors: [
        Color.Magenta
      ]
    },
    {
      colors: [
        Color.Orange,
        Color.Cyan,
        Color.Cyan
      ]
    },
    {
      colors: [
        Color.Cyan,
        Color.Magenta,
        Color.Magenta,
        Color.Yellow
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
