import { Component, OnInit } from '@angular/core';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { Column } from 'src/app/_models/Column';
import { Color } from 'src/app/_models/ColorEnum';

@Component({
  selector: 'app-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.scss']
})
export class FieldContainerComponent implements OnInit {

  columnsModel: Column[] = [
    {
      isDisabled: true,
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
      isVariantCompleted: false,
      isColumnCompleted: false
    },
    {
      isDisabled: true,
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
      isVariantCompleted: false,
      isColumnCompleted: false
    },
    {
      isDisabled: false,
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
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false },
          { color: Color.Cyan, isFilled: false }
        ]
      },
      value: 4,
      isVariantCompleted: false,
      isColumnCompleted: false
    },
    {
      isDisabled: true,
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
      isColumnCompleted: true
    },
    {
      isDisabled: false,
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
      isVariantCompleted: false,
      isColumnCompleted: false
    },
    {
      isDisabled: true,
      activeVariant: ColumnVariantEnum.B,
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
          { color: Color.White, isFilled: true },
          { color: Color.White, isFilled: true },
          { color: Color.Cyan, isFilled: true },
          { color: Color.Cyan, isFilled: true },
          { color: Color.Cyan, isFilled: true }
        ]
      },
      value: 4,
      isVariantCompleted: true,
      isColumnCompleted: true
    },
    {
      isDisabled: false,
      activeVariant: ColumnVariantEnum.A,
      variantA: {
        fields: [
          { color: Color.Yellow, isFilled: false },
          { color: Color.Yellow, isFilled: false },
          { color: Color.Magenta, isFilled: false },
          { color: Color.White, isFilled: false },
          { color: Color.Cyan, isFilled: false }
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
      isVariantCompleted: false,
      isColumnCompleted: false
    },
    {
      isDisabled: false,
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
      isVariantCompleted: false,
      isColumnCompleted: false
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
