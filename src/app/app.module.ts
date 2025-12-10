import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- VERY IMPORTANT

import { AppComponent } from './app.component';
import { StockAverageComponent } from './stock-average/stock-average.component';

@NgModule({
  declarations: [AppComponent, StockAverageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
