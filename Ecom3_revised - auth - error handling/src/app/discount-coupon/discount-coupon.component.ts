import { SharedService } from './../shared.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-discount-coupon',
  templateUrl: './discount-coupon.component.html',
  styleUrls: ['./discount-coupon.component.css']
})
export class DiscountCouponComponent implements OnInit {

  constructor(private router: Router,private sharedService: SharedService) {}

  ngOnInit(): void {
  }

   applyCoupon() {
    this.sharedService.setDiscountPercent(10); 
  }

  onSkipClick() {
    this.sharedService.setApplyDiscountDisabled(true);
  }

}
