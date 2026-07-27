import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotaFiscal } from '../interfaces/nota-fiscal';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {
  
  constructor(private http: HttpClient) {}

  private api = 'http://localhost:8080/notaFiscal';


  listar() {
    return this.http.get(this.api);
  }

  salvar(notaFiscal : NotaFiscal){
    return this.http.post(this.api, notaFiscal);
  }

  atualizar(notaFiscal: NotaFiscal){
    return this.http.put(this.api, notaFiscal);
  }
}
