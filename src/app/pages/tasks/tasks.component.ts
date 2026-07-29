import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxPopupModule } from 'devextreme-angular/ui/popup';
import { DxSelectBoxModule } from 'devextreme-angular/ui/select-box';
import { DxNumberBoxModule } from 'devextreme-angular/ui/number-box';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { NotaFiscal } from '../../interfaces/nota-fiscal';
import { NotaFiscalService } from '../../services/nota-fiscal-service';
import { NotaFiscalDto } from '../../interfaces/nota-fiscal-dto';
import { Produto } from '../../interfaces/produto';
import { ProdutoService } from '../../services/produto-service';

@Component({
  selector: 'app-tasks',
  providers: [NotaFiscalService],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [DxDataGridModule, DxFormModule, DxPopupModule, DxSelectBoxModule, DxNumberBoxModule, DxButtonModule]
})
export class TasksComponent implements OnInit {
  dataSource: NotaFiscal[] = [];
  productList: Produto[] = [];

  constructor(private notaFiscalService: NotaFiscalService, private produtoService: ProdutoService) {
  }

  ngOnInit(): void {
    this.carregarNotas();
    this.carregarProdutos();
  }

  private carregarNotas(): void {
    this.notaFiscalService.listar().subscribe({
      next: (notaFiscal) => {
        this.dataSource = notaFiscal;
      },
      error: (err) => console.error('Erro ao carregar nota fiscal', err),
    });
  }

  private carregarProdutos(): void {
    this.produtoService.listar().subscribe({
      next: (produtos) => this.productList = produtos,
      error: (err) => console.error('Erro ao carregar produtos', err),
    });
  }

  onSavingNota(e: any): void {
    const change = e?.changes?.[0];
    if (!change) {
      return;
    }
    e.cancel = false;

    if (change.type === 'insert') {
      const itensRaw = change.data.itens || [];
      const itens = itensRaw.map((it: any) => {
        const produtoId = it.produtoId ?? it.produto?.id ?? it.produto;
        const produto = this.productList.find(p => p.id === produtoId);
        return {
          produtoId,
          quantidade: it.quantidade ?? 1,
          precoUnitario: produto ? produto.preco : (it.precoUnitario ?? 0)
        };
      });

      const dto: NotaFiscalDto = {
        numeroNotaFiscal: change.data.numeroNotaFiscal,
        codigoCliente: change.data.cliente,
        itens
      };

      this.notaFiscalService.salvar(dto).subscribe({
        next: () => {
          this.carregarNotas();
        },
        error: (err) => console.error(err)
      });
    }

    else if (change.type === 'update') {

      const notaFiscalOriginal = this.dataSource.find(
        notaFiscal => notaFiscal.id === change.key
      );

      if (!notaFiscalOriginal) {
        return;
      }

      const notaFiscal: NotaFiscal = {
        ...notaFiscalOriginal,
        ...change.data,
        id: change.key,
      }

      this.notaFiscalService.atualizar(notaFiscal).subscribe({
        next: () => this.carregarNotas(),
        error: (err) => console.error('Erro ao atualizar nota  fiscal', err),
      })
    }


    //funcionando
    else if (change.type === 'remove') {
      const notaFiscal = { id: change.key } as NotaFiscal;
      this.notaFiscalService.deletar(notaFiscal).subscribe({
        next: () => this.carregarNotas(),
        error: (err) => console.error('Erro ao deletar nota fiscal', err),
      });
    }
  }
}
