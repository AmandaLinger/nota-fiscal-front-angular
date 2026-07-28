import { Cliente } from "./cliente";
import { Produto } from "./produto";

export interface NotaFiscal {
    id: number;
    numeroNotaFiscal: number;
    data: Date;
    cliente: Cliente;
    itens: Produto[];
    precoTotal: number;
}
