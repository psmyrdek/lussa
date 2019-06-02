import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from 'src/app/_models/Supplier';
import { Color } from 'src/app/_models/ColorEnum';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/_app-state/state';
import { TakeFromSupplierAction } from 'src/app/_app-state/actions/game.actions';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  takeAll(colorToTake: Color) {
    this.store.dispatch(new TakeFromSupplierAction({color: colorToTake, supplierId: this.supplier.id}))
  }

}
