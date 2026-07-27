import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Btn } from "../../shared/components/btn/btn";
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../services/produto-service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DxDataGridModule, Btn],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  produtos: Produto[] = [];
  columns = ['id', 'nome', 'preco', 'descricao'];


  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.produtoService.listar().subscribe((produtos) => {
      this.produtos = produtos;
    });
  }
}
