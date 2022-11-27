import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesChipsComponent } from './components/categories-chips/categories-chips.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoriesChipsComponentModule } from './components/categories-chips/categories-chips.component-module';
import { CategoryServiceModule } from './services/category.service-module';
import { ProductFormComponentModule } from './components/product-form/product-form.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'categories', component: CategoriesChipsComponent }, { path: 'add-product', component: ProductFormComponent }, { path: 'products-list', component: ProductsListComponent }, { path: 'products/:id', component: ProductDetailsComponent }]), CategoriesChipsComponentModule, CategoryServiceModule, ProductFormComponentModule, ProductServiceModule, ProductsListComponentModule, ProductDetailsComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
