import { Injectable } from '@angular/core';
import { Produto } from '../interfaces/produto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {

  //conectando com a api do backend na rota de produtos
  private api = 'http://localhost:8080/produtos';

  constructor(private http: HttpClient) {}

  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.api);
  }

  salvar(produto : Produto){
    return this.http.post<Produto>(this.api, produto);
  }

  atualizar(produto: Produto){
    return this.http.put<Produto>(this.api, produto);
  }
}
