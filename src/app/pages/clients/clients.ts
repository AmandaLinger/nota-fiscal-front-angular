import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { Cliente } from '../../interfaces/cliente';
import { ClienteService } from '../../services/cliente-service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-clients',
  imports: [DxDataGridModule],
  templateUrl: './clients.html',
  styleUrl: './clients.scss',
})
export class Clients implements OnInit {
  dataSource: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.carregarClientes();
  }

  private carregarClientes(): void {
    this.clienteService.listar().subscribe({
      next: (clientes) => {
        this.dataSource = clientes;
      },
      error: (err) => console.error('Erro ao carregar clientes', err),
    });
  }

  onSavingClients(e: any): void {
    const change = e?.changes?.[0];

    if (!change) {
      return;
    }

    if (change.type === 'insert') {
      this.clienteService.salvar(change.data).subscribe({
        next: () => this.carregarClientes(),
        error: (err) => console.error('Erro ao inserir cliente', err),
      });
    }

    if (change.type === 'update') {
      const cliente = { ...change.data, id: change.key } as Cliente;
      this.clienteService.atualizar(cliente).subscribe({
        next: () => this.carregarClientes(),
        error: (err) => console.error('Erro ao atualizar cliente', err),
      });
    }

    if (change.type === 'remove') {
      const requests = change.keys.map((id: number) => this.clienteService.deletar(id));

      forkJoin(requests).subscribe({
        next: () => this.carregarClientes(),
        error: (err) => console.error('Erro ao excluir cliente', err),
      });
    }

    e.cancel = true;
  }
}
