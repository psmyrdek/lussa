import { Component, OnInit } from '@angular/core';
import { AppState } from '../_app-state/state';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {

  canRenderState: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.pipe(select('app'))
      .subscribe((state: AppState) => {
        this.canRenderState = state.isGameCreated
      })
  }

}
