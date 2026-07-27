import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-products',
  imports: [DxDataGridModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {

}
