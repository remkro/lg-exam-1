import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CategoriesChipsComponent } from './categories-chips.component';
import {RouterLink} from "@angular/router";

@NgModule({
    imports: [MatCardModule, MatChipsModule, CommonModule, MatButtonModule, MatIconModule, RouterLink],
  declarations: [CategoriesChipsComponent],
  providers: [],
  exports: [CategoriesChipsComponent]
})
export class CategoriesChipsComponentModule {
}
