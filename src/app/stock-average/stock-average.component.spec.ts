import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockAverageComponent } from './stock-average.component';

describe('StockAverageComponent', () => {
  let component: StockAverageComponent;
  let fixture: ComponentFixture<StockAverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockAverageComponent]
    });
    fixture = TestBed.createComponent(StockAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
