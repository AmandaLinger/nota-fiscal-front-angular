import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Btn } from "../../shared/components/btn/btn";
import { NotaFiscal } from '../../interfaces/nota-fiscal';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [DxDataGridModule,Btn]
})
export class TasksComponent {
  dataSource: NotaFiscal[] = [];
  columns: string[] = ['id', 'numeroNotaFiscal', 'dataEmissao', 'cliente', 'produtos', 'precoTotal'];
  // TODO: conectar ao backend para carregar as notas fiscais
}
