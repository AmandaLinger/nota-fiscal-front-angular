import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Btn } from "../../shared/components/btn/btn";
import { NotaFiscal } from '../../interfaces/nota-fiscal';
import { NotaFiscalService } from '../../services/nota-fiscal-service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [DxDataGridModule,Btn]
})
export class TasksComponent implements OnInit{
  dataSource: NotaFiscal[] = [];
  columns: string[] = ['id', 'numeroNotaFiscal', 'dataEmissao', 'cliente', 'produtos', 'precoTotal'];
  

  constructor(private notaFiscalService: NotaFiscalService){}

  ngOnInit(): void {
    this.notaFiscalService.listar().subscribe((notaFiscal) => {
      this.dataSource = notaFiscal;
    })
  }
}
