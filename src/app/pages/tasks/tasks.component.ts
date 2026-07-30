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
  selector: 'demo-app',
  templateUrl: `./tasks.component.html`,
  imports: [
    DxDataGridModule,
  ],
})
export class TasksComponent implements OnInit {
  notas: NotaFiscal[] = [];

  ngOnInit() {
    this.notaFiscalService.listar().subscribe(
      notas => this.notas = notas
    );
  }

  constructor(private notaFiscalService: NotaFiscalService) {}
}

