import { Input } from "@angular/core";

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent implements OnInit {
  @Input()
  gameType:string="Digital Ps4"
  @Input()
  gamePrice:string="399,90"
  constructor() { }

  ngOnInit(): void {
  }

}
