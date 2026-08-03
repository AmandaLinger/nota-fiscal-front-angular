import {Component, OnInit} from '@angular/core';
import {DxDataGridModule, DxDateBoxModule, DxNumberBoxModule, DxPopupModule, DxTextBoxModule} from 'devextreme-angular';
import {NotaFiscal} from '../../interfaces/nota-fiscal';
import {NotaFiscalService} from '../../services/nota-fiscal-service';
import {Cliente} from '../../interfaces/cliente';
import {Produto} from '../../interfaces/produto';
import {NotaFiscalCadastro} from '../../interfaces/nota-fiscal-cadastro';
import {ClienteService} from '../../services/cliente-service';
import {ProdutoService} from '../../services/produto-service';
import {DxButtonModule} from 'devextreme-angular/ui/button';
import {DxFormModule} from 'devextreme-angular/ui/form';


@Component({
  styleUrls: [`./tasks.component.scss`],
  standalone: true,
  selector: 'app-tasks',
  templateUrl: `./tasks.component.html`,
  imports: [
    DxDataGridModule,
    DxButtonModule,
    DxPopupModule,
    DxFormModule,
    DxTextBoxModule,
    DxDateBoxModule,
    DxNumberBoxModule
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
    numeroNotaFiscal: null as any,
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

  abrirPopUp(): void{

    this.novaNota = {
      numeroNotaFiscal: 0,
      data: new Date().toISOString().substring(0,10),
      codigoCliente: 0,
      itens:[
        {
          produtoId: 0,
          quantidade: 1,
          precoUnitario: 0
        }
      ]
    };

    this.popupVisible = true;
  }

  fecharPopup(): void{
    this.popupVisible = false;
  }
}

