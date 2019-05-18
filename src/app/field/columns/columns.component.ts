import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/_models/Column';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { Color } from 'src/app/_models/ColorEnum';

@Component({
  selector: 'app-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss']
})
export class ColumnsComponent implements OnInit {

  columnsModel: Column[] = [
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.White, isFilled: true },
          { color: Color.Yellow, isFilled: true },
          { color: Color.Cyan, isFilled: true },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.B,
      variantA: {
        fields: [
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: true },
          { color: Color.White, isFilled: true },
          { color: Color.Cyan, isFilled: true },
          { color: Color.Cyan, isFilled: true },
          { color: Color.Cyan, isFilled: true }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Magenta, isFilled: true },
          { color: Color.Magenta, isFilled: true },
          { color: Color.Magenta, isFilled: true },
          { color: Color.Magenta, isFilled: true },
          { color: Color.Magenta, isFilled: true }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Orange, isFilled: true },
          { color: Color.Orange, isFilled: true },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    },
    {
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.Magenta, isFilled: false }
        ]
      },
      variantB: {
        fields: [
          { color: Color.White, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
