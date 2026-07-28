import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../services/produto-service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [DxDataGridModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  dataSource: Produto[] = [];

  constructor(private produtoService: ProdutoService) { }

  ngOnInit() {
    this.carregarProdutos()
  }

  private carregarProdutos(): void {
    this.produtoService.listar().subscribe({
      next: (produtos) => {
        this.dataSource = produtos;
      },
      error: (err) => console.error('Erro ao carregar produtos', err),
    });
  }

  onSavingProducts(e: any): void{
    const change = e?.changes?.[0];

    if (!change) {
          return;
        }
    
        if (change.type === 'insert') {
          this.produtoService.salvar(change.data).subscribe({
            next: () => this.carregarProdutos(),
            error: (err) => console.error('Erro ao inserir produto', err),
          });
        }
    
        if (change.type === 'update') {
          const produto = { ...change.data, id: change.key } as Produto;
          this.produtoService.atualizar(produto).subscribe({
            next: () => this.carregarProdutos(),
            error: (err) => console.error('Erro ao atualizar produto', err),
          });
        }
    
        if (change.type === 'remove') {
          const requests = change.keys.map((id: number) => this.produtoService.deletar(id));
    
          forkJoin(requests).subscribe({
            next: () => this.carregarProdutos(),
            error: (err) => console.error('Erro ao excluir cliente', err),
          });
        }
    
        e.cancel = true;
  }
}
