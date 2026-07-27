import { Component } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import{ Btn } from '../../shared/components/btn/btn';

@Component({
  selector: 'app-clients',
  imports: [DxDataGridModule, Btn],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients {
  dataSource: any[] = [];
  columns = ['id', 'Nome', 'Codigo'];
}
