import { SharedService } from './../shared.service';
import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";

@Component({
    templateUrl: "cartDetail.component.html"
})
export class CartDetailComponent {
    public discountValue : number = 0;
    public isDiscountAdded: boolean = false;
    public isDiscountAvailable: boolean = false;
    constructor(public cart: Cart,private sharedService:SharedService) { 
        this.discountValue = this.sharedService.getDiscountPercent();
        if(this.discountValue ==0 ){
            this.isDiscountAvailable = true;
        }
    }

    applyDiscount(){
        if(this.discountValue>0){
            this.isDiscountAdded = true;
        }
    }
}
