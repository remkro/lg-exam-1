import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import {ProductExtendedModel} from "../../models/product-extended.model";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly details$: Observable<ProductExtendedModel> = this._activatedRoute.params.pipe(
    switchMap(data => this._productService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }
}
