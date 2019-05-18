import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/_models/Column';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;

  variant: ColumnVariant;

  constructor() { }

  ngOnInit() {
    this.variant = this.column.activeVariant === ColumnVariantEnum.A
      ? this.column.variantA
      : this.column.variantB;
  }

}
