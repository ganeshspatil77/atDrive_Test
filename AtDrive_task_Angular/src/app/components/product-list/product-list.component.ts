import { Component, OnInit } from '@angular/core';
import { ApiservicesService } from '../../services/apiservices.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Product } from '../../interface/product.interface';
import { CommonDataService } from '../../services/common-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  showConfirmation: boolean = false;
  productIdForDelete: string = '';
  productNameForDelete: string = '';



  constructor(private apiSerice: ApiservicesService, public router: Router, public common: CommonDataService) { }
  ngOnInit(): void {
    this.getProductList();
  }

  addNewProduct() {
    this.router.navigateByUrl('/add-product')
  }



  getProductList() {
    this.apiSerice.getAll().subscribe((res: any) => {
      this.products = res

    })
  }

  editProduct(product: Product) {
    if (product._id) {

      this.apiSerice.get(product._id).subscribe((res: Product) => {
        this.common.selectedProduct = res;
        this.router.navigate(['/add-product']);
      })
    }

  }

  
  deleteProduct(product: any) {
    this.productIdForDelete = product?._id;
    this.productNameForDelete = product.name
    this.showConfirmation = true;

  }


  confirmDelete() {
    this.apiSerice.delete(this.productIdForDelete).subscribe(() => {
      this.getProductList()
      this.closeConfirmationPopup();
    });
  }

  closeConfirmationPopup() {
    this.showConfirmation = false;
  }


}
