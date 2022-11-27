import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import {ProductExtendedModel} from "../../models/product-extended.model";

@Component({
  selector: 'app-products-list',
  styleUrls: ['./products-list.component.scss'],
  templateUrl: './products-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent {
  readonly data$: Observable<ProductExtendedModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
