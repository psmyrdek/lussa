import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/_models/Column';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';
// import { FillColumnAction } from 'src/app/_app-state/actions/player.actions';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;

  variant: ColumnVariant;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.variant = this.column.activeVariant === ColumnVariantEnum.A
      ? this.column.variantA
      : this.column.variantB;
  }

  fillColumn() {
    // this.store.dispatch(new FillColumnAction({ columnId: this.column.id, fillJokers: false }))
  }

}
