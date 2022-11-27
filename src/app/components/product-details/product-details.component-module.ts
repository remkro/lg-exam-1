import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ProductDetailsComponent } from './product-details.component';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatCardModule, CommonModule, RouterModule],
  declarations: [ProductDetailsComponent],
  providers: [],
  exports: [ProductDetailsComponent]
})
export class ProductDetailsComponentModule {
}
