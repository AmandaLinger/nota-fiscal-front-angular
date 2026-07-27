import { NotaFiscal } from "./nota-fiscal";
import { Produto } from "./produto";

export interface ItemNotaFiscal {
    id: number;
    quantidade: number;
    precoUnitario: number;
    produto: Produto;
    notaFiscal: NotaFiscal;
}
