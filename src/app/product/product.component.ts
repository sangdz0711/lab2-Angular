import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  product=[{
    id: 1,
    name: 'iphone 11',
    price: 11000000,
    desc: 'black',
  },
  {
    id: 2,
    name: 'iphone 12',
    price: 11000000,
    desc: 'black',
  }
  ]
  ListProduct = this.product;
  newProduct = {
    id: 0,
    name: '',
    price: 0,
    desc: '',
  };
  remove(id :number){
    const confirm = window.confirm("Bạn muốn xóa ?")
    this.ListProduct = this.ListProduct.filter(pro => pro.id !== id);
  }


  onSubmit(product :any) {
    if (this.newProduct.id) {
      for (let i = 0; i < this.product.length; i++) {
        if (this.product[i].id === this.newProduct.id) {
          this.product[i] = this.newProduct;
        }
      }
    } else {
      this.newProduct = {
        ...this.newProduct,
        id: this.product.length + 1,
        price: Number(this.newProduct.price)
      };
      this.product.push(this.newProduct);
    }
    this.newProduct = {
      id: 0,
      name: '',
      price: 0,
      desc: '',
    }
  }
  onEdit(product: any) {
    this.newProduct = product;
  }
}

