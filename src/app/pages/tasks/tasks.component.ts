import {Component, enableProdMode, OnInit} from '@angular/core';
import {DxDataGridModule} from 'devextreme-angular';
import 'anti-forgery';
import {NotaFiscal} from '../../interfaces/nota-fiscal';
import {NotaFiscalService} from '../../services/nota-fiscal-service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

let modulePrefix = '';
// @ts-ignore
if (window && window.config?.packageConfigPaths) {
  modulePrefix = '/app';
}

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

}

