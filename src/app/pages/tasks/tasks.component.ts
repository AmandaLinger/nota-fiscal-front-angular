import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Btn } from "../../shared/components/btn/btn";

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [DxDataGridModule,Btn]
})
export class TasksComponent {
  dataSource: any[] = [];
  columns: string[] = [
    'id',
    'numero_nota',
    'data_emissao',
    'cliente',
    'item_nota',
    'preco_total'
  ];

  // TODO: conectar ao backend para carregar as notas fiscais
}
