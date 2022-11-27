import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductsListComponent } from './products-list.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, RouterModule],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
