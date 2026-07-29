import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotaFiscal } from '../interfaces/nota-fiscal';
import { Observable } from 'rxjs';
import {Cliente} from '../interfaces/cliente';
import {NotaFiscalDto} from '../interfaces/nota-fiscal-dto';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {

  constructor(private http: HttpClient) {}

  private api = 'http://localhost:8080/notaFiscal';


  listar(): Observable<NotaFiscal[]> {
    return this.http.get<NotaFiscal[]>(this.api);
  }

  salvar(notaFiscal : NotaFiscalDto): Observable<NotaFiscal> {
    return this.http.post<NotaFiscal>(this.api, notaFiscal);
  }

  atualizar(notaFiscal: NotaFiscal): Observable<NotaFiscal> {
    return this.http.put<NotaFiscal>(`${this.api}/${notaFiscal.id}`, notaFiscal);
  }

  deletar(notaFiscal: NotaFiscal) : Observable<void> {
    return this.http.delete<void>(`${this.api}/${notaFiscal.id}`);
  }
}


