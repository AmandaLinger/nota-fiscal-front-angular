import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Btn } from "../../shared/components/btn/btn";

@Component({
  selector: 'app-products',
  imports: [DxDataGridModule, Btn],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  dataSource: any[] = [];
  columns = ['id', 'Produto_nome', 'Preco', 'Descrição'];
}
