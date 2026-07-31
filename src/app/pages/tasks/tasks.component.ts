import {Component, OnInit} from '@angular/core';
import {DxDataGridModule} from 'devextreme-angular';
import {NotaFiscal} from '../../interfaces/nota-fiscal';
import {NotaFiscalService} from '../../services/nota-fiscal-service';
import {Cliente} from '../../interfaces/cliente';
import {Produto} from '../../interfaces/produto';
import {NotaFiscalCadastro} from '../../interfaces/nota-fiscal-cadastro';


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
  constructor(private notaFiscalService: NotaFiscalService) {}

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
    this.notaFiscalService.listar().subscribe({
      next: (notas) => {
        console.log('Notas carregadas: ',notas);
        this.notas = notas;
      },
      error: (error) => {
        console.log('Erro ao carregar notas:  ', error);
      }
      }
    );
  }


  calcularSubtotal(item:any): number{
    return item.quantidade*item.precoUnitario;
  }

}

