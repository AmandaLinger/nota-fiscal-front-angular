import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import{ Btn } from '../../shared/components/btn/btn';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';

@Component({
  selector: 'app-clients',
  imports: [DxDataGridModule, Btn],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients  implements OnInit{
  dataSource: Cliente[] = [];
  columns = ['id', 'nome', 'codigo'];


  constructor(private clienteService : ClienteService){}

  ngOnInit(): void {
    this.clienteService.listar().subscribe( (clientes) => {
      this.dataSource = clientes;
    })
  }
}
