import { Component } from '@angular/core';

@Component({
  selector: 'app-stock-average',
  templateUrl: './stock-average.component.html',
  styleUrls: ['./stock-average.component.css'],
})
export class StockAverageComponent {
  // Purchase Inputs
  units1: number = 0;
  price1: number = 0;
  units2: number = 0;
  price2: number = 0;

  // Results
  totalUnits: number = 0;
  totalAmount: number = 0;
  avgPrice: number = 0;

  // CMP
  cmp: number = 0;

  // Loss / Profit Outputs
  showLoss: boolean = false;

  firstLossAmount: number = 0;
  firstLossPercent: number = 0;

  avgLossAmount: number = 0;
  avgLossPercent: number = 0;

  reducedAmount: number = 0;
  reducedPercent: number = 0;

  // helper
  get abs() {
    return Math.abs;
  }

  // Calculate average price
  calculateAverage() {
    const invest1 = this.units1 * this.price1;
    const invest2 = this.units2 * this.price2;

    this.totalUnits = this.units1 + this.units2;
    this.totalAmount = invest1 + invest2;

    this.avgPrice =
      this.totalUnits > 0 ? this.totalAmount / this.totalUnits : 0;

    this.calculateLoss(); // auto update loss
  }

  // Calculate all profit/loss
  calculateLoss() {
    if (!this.cmp || this.cmp <= 0 || this.totalUnits <= 0) {
      this.showLoss = false;
      return;
    }

    const totalUnits = this.totalUnits;
    const avgPrice = this.avgPrice;

    // 📉 Loss/profit from FIRST purchase price
    this.firstLossAmount = (this.cmp - this.price1) * this.units1;
    this.firstLossPercent =
      this.price1 > 0 ? ((this.cmp - this.price1) / this.price1) * 100 : 0;

    // 📉 Loss/profit AFTER averaging
    this.avgLossAmount = (this.cmp - avgPrice) * totalUnits;
    this.avgLossPercent =
      avgPrice > 0 ? ((this.cmp - avgPrice) / avgPrice) * 100 : 0;

    // 📊 Loss Reduced (improvement after averaging)
    this.reducedAmount = this.avgLossAmount - this.firstLossAmount;
    this.reducedPercent = this.avgLossPercent - this.firstLossPercent;

    this.showLoss = true;
  }

  // Clear fields
  clear() {
    this.units1 = 0;
    this.price1 = 0;
    this.units2 = 0;
    this.price2 = 0;

    this.totalUnits = 0;
    this.totalAmount = 0;
    this.avgPrice = 0;

    this.cmp = 0;

    this.firstLossAmount = 0;
    this.firstLossPercent = 0;
    this.avgLossAmount = 0;
    this.avgLossPercent = 0;
    this.reducedAmount = 0;
    this.reducedPercent = 0;

    this.showLoss = false;
  }

  // convenience getters for template (using existing names)
  get firstIsLoss(): boolean {
    return this.firstLossAmount < 0;
  }
  get firstDisplayAmount(): number {
    return this.abs(this.firstLossAmount);
  }
  get firstIsLossPct(): boolean {
    return this.firstLossPercent < 0;
  }
  get firstDisplayPct(): number {
    return this.abs(this.firstLossPercent);
  }

  get avgIsLoss(): boolean {
    return this.avgLossAmount < 0;
  }
  get avgDisplayAmount(): number {
    return this.abs(this.avgLossAmount);
  }
  get avgIsLossPct(): boolean {
    return this.avgLossPercent < 0;
  }
  get avgDisplayPct(): number {
    return this.abs(this.avgLossPercent);
  }

  get reducedIsLoss(): boolean {
    return this.reducedAmount < 0;
  }
  get reducedDisplayAmount(): number {
    return this.abs(this.reducedAmount);
  }
  get reducedIsLossPct(): boolean {
    return this.reducedPercent < 0;
  }
  get reducedDisplayPct(): number {
    return this.abs(this.reducedPercent);
  }
}
