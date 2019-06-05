import { Component, OnInit, Input } from '@angular/core';
import { Column } from 'src/app/_models/Column';
import { ColumnVariant } from 'src/app/_models/ColumnVariant';
import { ColumnVariantEnum } from 'src/app/_models/ColumnVariantEnum';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';
import { FillColumnAction } from 'src/app/_app-state/actions/game.actions';
import { MatDialog } from '@angular/material/dialog';
import { ForeignColumnWarningComponent } from 'src/app/dialogs/foreign-column-warning/foreign-column-warning.component';
import { Color } from 'src/app/_models/ColorEnum';
import { JokerColumnQuestionComponent } from 'src/app/dialogs/joker-column-question/joker-column-question.component';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit {

  @Input() column: Column;

  @Input() readOnly: boolean;
  variant: ColumnVariant;

  constructor(private store: Store<AppState>, private dialog: MatDialog) { }

  ngOnInit() {
    this.variant = this.column.activeVariant === ColumnVariantEnum.A
      ? this.column.variantA
      : this.column.variantB;
  }

  fillColumn() {
    // Filling column of other players
    if (this.readOnly) {
      this.dialog.open(ForeignColumnWarningComponent);
      return;
    }

    // Filling column with joker fields
    if (this.variant.fields.some(c => !c.isFilled && c.color === Color.Joker)) {
      const dialogRef = this.dialog.open(JokerColumnQuestionComponent);

      dialogRef.afterClosed().subscribe((fillJokers: boolean) => {
        this.store.dispatch(new FillColumnAction({ columnId: this.column.id, fillJokers }));
      });
      return;
    }

    // Filling column
    this.store.dispatch(new FillColumnAction({ columnId: this.column.id, fillJokers: false }));
  }

}
