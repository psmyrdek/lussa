import { Component, OnInit, Input } from '@angular/core';
import { Supplier } from 'src/app/_models/Supplier';
import { Color } from 'src/app/_models/ColorEnum';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements OnInit {

  @Input() supplier: Supplier;

  constructor() { }

  ngOnInit() {
  }

  takeAll(colorToTake: Color) {
    this.supplier.colors = this.supplier.colors.filter(x => x != colorToTake)
  }

}
