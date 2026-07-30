import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NotaFiscal} from '../interfaces/nota-fiscal';

@Injectable({
  providedIn: 'root',
})
export class NotaFiscalService {

  private api = 'http://localhost:8080/notaFiscal';

  constructor(private http: HttpClient){}

  listar() {
    return this.http.get<NotaFiscal[]>(this.api);
  }
}


