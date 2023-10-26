import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private discountPercent: number = 0;
  private isApplyDiscountDisabled = false;

  getDiscountPercent(): number {
    return this.discountPercent;
  }

  setDiscountPercent(percent: number): void {
    this.discountPercent = percent;
  }

  setApplyDiscountDisabled(value: boolean) {
    this.isApplyDiscountDisabled = value;
  }

  getApplyDiscountDisabled() {
    return this.isApplyDiscountDisabled;
  }
}
