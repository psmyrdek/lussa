import { Component, OnInit } from '@angular/core';
import { Supplier } from 'src/app/_models/Supplier';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/app.reducer';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
@Component({
  selector: 'app-suppliers-container',
  templateUrl: './suppliers-container.component.html',
  styleUrls: ['./suppliers-container.component.scss']
})
export class SuppliersContainerComponent implements OnInit {

  suppliers: Supplier[];

  constructor(private store: Store<AppState>) {
    this.store
      .pipe(select('app'))
      .subscribe(
        (state: AppState) => {
          this.suppliers = state.suppliers
        }
      )
  }

  ngOnInit() {
  }

}
