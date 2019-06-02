import { Component, OnInit } from '@angular/core';
import { Column } from 'src/app/_models/Column';
import { AppState } from 'src/app/_app-state/state';
import { Store, select } from '@ngrx/store';
import { selectCurrentPlayer } from 'src/app/_app-state/selectors/current-player';
import { Player } from 'src/app/_models/Player';

@Component({
  selector: 'app-field-container',
  templateUrl: './field-container.component.html',
  styleUrls: ['./field-container.component.scss']
})
export class FieldContainerComponent implements OnInit {

  columnsModel: Column[];

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select(selectCurrentPlayer))
      .subscribe(
        (player: Player) => {
          if (player) {
            this.columnsModel = player.columns
          }
        }
      )
  }

  ngOnInit() {
  }

}
