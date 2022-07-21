import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/shared/model/data';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-google-product',
  templateUrl: './google-product.component.html',
  styleUrls: ['./google-product.component.scss']
})
export class GoogleProductComponent implements OnInit {
  products:Iproduct[]=[];
  gproducts! : Iproduct[];
  

  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.gproducts = this.products = this.productService.getProduct()
  }
  onSearch(n : string){
    let input = n.toLowerCase();
    if(input === ''){
      this.products = this.gproducts;
    }
    else{
    let filterP = this.products.filter(ele => ele.name.toLowerCase().includes(input));
    this.products = filterP;
    }
  }

  onHardware(){
    let hardwareArr = this.gproducts.filter(ele => ele.type.toLowerCase() === 'hardware');
    this.products = hardwareArr;
    console.log(hardwareArr);
    
  }
  onApp(){
    let hardwareArr = this.gproducts.filter(ele => ele.type.toLowerCase() === 'app');
    this.products = hardwareArr;
  }
  onService(){
    let hardwareArr = this.gproducts.filter(ele => ele.type.toLowerCase() === 'service');
    this.products = hardwareArr;
  }
  onSelectHandler(val : string){
    // console.log(val);  
    if(val){
    this.products = this.gproducts;      
    let hardwareArr = this.products.filter(ele => ele.type.toLowerCase() === val);
    this.products = hardwareArr;
    
    // console.log(hardwareArr);    
    }
    if(val === 'All'){
      this.products = this.gproducts
    }   
  } 
}
