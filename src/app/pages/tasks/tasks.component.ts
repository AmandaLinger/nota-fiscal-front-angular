import {Component, OnInit} from '@angular/core';
import {DxDataGridModule} from 'devextreme-angular';
import {NotaFiscal} from '../../interfaces/nota-fiscal';
import {NotaFiscalService} from '../../services/nota-fiscal-service';
import {Cliente} from '../../interfaces/cliente';
import {Produto} from '../../interfaces/produto';
import {NotaFiscalCadastro} from '../../interfaces/nota-fiscal-cadastro';
import {ClienteService} from '../../services/cliente-service';
import {ProdutoService} from '../../services/produto-service';


@Component({
  styleUrls: [`./tasks.component.scss`],
  standalone: true,
  selector: 'app-tasks',
  templateUrl: `./tasks.component.html`,
  imports: [
    DxDataGridModule,
  ],
})
export class TasksComponent implements OnInit {
  constructor(
    private notaFiscalService: NotaFiscalService,
    private clienteService: ClienteService,
    private produtoService: ProdutoService
  ) {}

  notas: NotaFiscal[] = [];

  clientes: Cliente[] = [];

  produtos: Produto[] = [];

  popupVisible = false;

  novaNota: NotaFiscalCadastro = {
    numeroNotaFiscal: 0,
    data: new Date().toISOString().substring(0,10),
    codigoCliente: 0,
    itens:[]
  };

  ngOnInit(): void {
    this.notaFiscalService.listar().subscribe(
      notas => this.notas = notas
    );

    this.clienteService.listar().subscribe(
      clientes => this.clientes = clientes
    );

    this.produtoService.listar().subscribe(
      produtos => this.produtos = produtos
    );
  }


  calcularSubtotal(item:any): number{
    return item.quantidade*item.precoUnitario;
  }

  abrirPopup(): void{
    this.popupVisible = true;
  }

  fecharPopup(): void{
    this.popupVisible = false;
  }
}

