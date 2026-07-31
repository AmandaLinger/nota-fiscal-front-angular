import {Component, OnInit} from '@angular/core';
import {DxDataGridModule} from 'devextreme-angular';
import {NotaFiscal} from '../../interfaces/nota-fiscal';
import {NotaFiscalService} from '../../services/nota-fiscal-service';


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

