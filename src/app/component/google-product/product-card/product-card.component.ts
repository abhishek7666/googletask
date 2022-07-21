import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/data';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() arr! : Iproduct; 
  
  constructor() { }

  ngOnInit(): void {

  }
 

}
