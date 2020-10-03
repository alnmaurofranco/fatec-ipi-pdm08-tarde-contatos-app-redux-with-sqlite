import * as FileSystem from 'expo-file-system';
export const ADD_CONTATO = "ADD_CONTATO";
export const LISTA_CONTATO = "LISTA_CONTATO";
import { inserirContato, buscarContato } from '../helpers/db';

export const addContato = (nome, telefone, imagemURI) => {
    return async dispatch => {
        const nomeArquivo = imagemURI.split('/').pop();
        const novoPath = FileSystem.documentDirectory + nomeArquivo;
        try {
            await FileSystem.moveAsync({
                from: imagemURI,
                to: novoPath
            });
            const resultadoDB = await inserirContato(
                nome,
                telefone,
                novoPath,
            );
            dispatch({
                type: ADD_CONTATO,
                dadosContato: {
                    id: resultadoDB.insertId,
                    nomeContato: nome,
                    telefoneContato: telefone,
                    imagemURI: novoPath
                }
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export const listarContato = () => {
    return async dispatch => {
        try {
            const resultadoDB = await buscarContato();
            console.log(resultadoDB);
            dispatch({
                type: LISTA_CONTATO,
                contatos: resultadoDB.rows._array ? resultadoDB.rows._array : []
            });
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}