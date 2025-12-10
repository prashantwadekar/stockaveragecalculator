import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-average',
  templateUrl: './stock-average.component.html',
  styleUrls: ['./stock-average.component.css']
})
export class StockAverageComponent {

  // First purchase
  units1: number | null = 1;
  price1: number | null = 1;

  // Second purchase
  units2: number | null = 1;
  price2: number | null = 1;

  // Results
  totalUnits: number = 0;
  totalAmount: number = 0;
  avgPrice: number = 0;

  calculate() {
    const invest1 = (this.units1 ?? 0) * (this.price1 ?? 0);
    const invest2 = (this.units2 ?? 0) * (this.price2 ?? 0);

    this.totalUnits = (this.units1 ?? 0) + (this.units2 ?? 0);
    this.totalAmount = invest1 + invest2;

    this.avgPrice = this.totalUnits > 0 ? this.totalAmount / this.totalUnits : 0;
  }

  clear() {
    this.units1 = null;
    this.price1 = null;
    this.units2 = null;
    this.price2 = null;

    this.totalUnits = 0;
    this.totalAmount = 0;
    this.avgPrice = 0;
  }
}
