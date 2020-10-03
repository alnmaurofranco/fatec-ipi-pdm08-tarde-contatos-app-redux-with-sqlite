import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('contatos.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((table) => {
            table.executeSql('CREATE TABLE IF NOT EXISTS tb_contato (id INTEGER PRIMARY KEY, nome TEXT NOT NULL, telefone TEXT NOT NULL, imagemURI TEXT NOT NULL);',
                [],
                (_, resultado) => {
                    resolve(resultado);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const inserirContato = (nome, telefone, imagemURI) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((table) => {
            table.executeSql(
                'INSERT INTO tb_contato (nome, telefone, imagemURI) VALUES (?, ?, ?)',
                [nome, telefone, imagemURI],
                (_, resultado) => {
                    resolve(resultado);
                },
                (err) => {
                    reject(err);
                }
            );
        });
    });
    return promise;
}

export const buscarContato = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((table) => {
            table.executeSql(
                'SELECT * FROM tb_contato',
                [],
                (_, resultado) => {
                    resolve(resultado);
                },
                (err) => {
                    reject(err)
                }
            );
        });
    });
    return promise;
}