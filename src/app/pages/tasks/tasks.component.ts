import { Component, OnInit } from '@angular/core';
import { DxDataGridModule, DxDataGridTypes } from 'devextreme-angular/ui/data-grid';
import { NotaFiscal } from '../../interfaces/nota-fiscal';
import { NotaFiscalService } from '../../services/nota-fiscal-service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [DxDataGridModule]
})
export class TasksComponent implements OnInit{
  dataSource: NotaFiscal[] = [];

  constructor(private notaFiscalService: NotaFiscalService){}

  ngOnInit(): void {
    this.notaFiscalService.listar().subscribe((notaFiscal) => {
      this.dataSource = notaFiscal;
    })
  }


  onSavingNota(e: DxDataGridTypes.SavingEvent){

  }
}
