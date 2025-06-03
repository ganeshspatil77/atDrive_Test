import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../interface/product.interface';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CommonDataService } from '../../services/common-data.service';
import { ApiservicesService } from '../../services/apiservices.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-add-update-product',
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-update-product.component.html',
  styleUrl: './add-update-product.component.scss'
})
export class AddUpdateProductComponent implements OnInit {

  @Input() product: Product | null = null;
  @Output() formSubmit = new EventEmitter<Product>();

  model: Product = { name: '', price: 0, description: '' };

  constructor(private common: CommonDataService, private router:Router, private apiSerice:ApiservicesService) { }


  ngOnInit(): void {
    if (this.common.selectedProduct) {
      this.model = this.common.selectedProduct;
    }
  }


   submit() {
    if (this.model._id) {
      this.apiSerice.update(this.model._id!, this.model).subscribe(() => {
        this.common.selectedProduct = null;
        this.router.navigateByUrl('');
        
      });
    } else {
      this.apiSerice.create(this.model).subscribe(() => {
       this.router.navigateByUrl('');
      });
    }
  }
}
