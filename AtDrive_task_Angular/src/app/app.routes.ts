import { Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddUpdateProductComponent } from './components/add-update-product/add-update-product.component';

export const routes: Routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: ProductListComponent },
    {
        path: 'add-product',
        component: AddUpdateProductComponent
    }
];
