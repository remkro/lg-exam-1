import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-categories-chips',
  styleUrls: ['./categories-chips.component.scss'],
  templateUrl: './categories-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesChipsComponent {
  readonly data$: Observable<string[]> = this._categoryService.getAll();

  constructor(private _categoryService: CategoryService) {
  }
}
