import Contato from "../modelo/Contato";
import { ADD_CONTATO, LISTA_CONTATO } from "./contatos.action";

const estadoInicial = {
    contatos: [],
};

export default (estado = estadoInicial, action) => {
    switch (action.type) {
        case ADD_CONTATO:
            const dados = new Contato(
                action.dadosContato.id.toString(),
                action.dadosContato.nomeContato,
                action.dadosContato.telefoneContato,
                action.dadosContato.imagemURI
            );
            return {
                contatos: estado.contatos.concat(dados)
            }
        case LISTA_CONTATO:
            return {
                contatos: estado.contatos.map((contato) => new Contato(contato.id.toString(), contato.nome, contato.telefone, contato.imagemURI))
            }
        default:
            return estado;
    }
}