import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/_models/Column';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  @Input() columns: Column[];

  @Input() readOnly: boolean;

  constructor() { }

  ngOnInit() {
  }

}
