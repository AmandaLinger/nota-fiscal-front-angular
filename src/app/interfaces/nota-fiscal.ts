import { Cliente } from "./cliente";
import { Produto } from "./produto";

export interface NotaFiscal {
    id: number;
    numeroNotaFiscal: number;
    cliente: Cliente;
    produtos: Produto[];
    precoTotal: number;
}
