import {itemNotaFiscalDto} from './item-nota-fiscal-dto';

export interface NotaFiscalDto {
  numeroNotaFiscal: number;
  data?: Date;
  codigoCliente: number;
  itens: itemNotaFiscalDto[];
}
