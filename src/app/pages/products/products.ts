import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Btn } from "../../shared/components/btn/btn";
import { Produto } from '../../interfaces/produto';

@Component({
  selector: 'app-products',
  imports: [DxDataGridModule, Btn],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products {
  dataSource: Produto[] = [];
  columns = ['id', 'nome', 'preco', 'descricao'];
}
