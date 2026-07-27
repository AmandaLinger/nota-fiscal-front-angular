import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-clients',
  imports: [DxDataGridModule],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  dataSource: any[] = [];
  columns = ['id', 'Nome', 'Codigo'];
}
