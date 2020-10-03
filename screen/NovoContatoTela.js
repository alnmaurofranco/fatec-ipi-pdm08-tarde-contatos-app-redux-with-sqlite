import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos.action';
import Cores from '../constantes/Cores';
import TiraFoto from '../components/TirarFoto';

const NovoContatoTela = (props) => {
  const dispatch = useDispatch();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [imagemURI, setImagemURI] = useState();

  const capturarNome = (nome) => {
    setNome(nome);
  };

  const capturarTelefone = (telefone) => {
    setTelefone(telefone);
  };

  const adicionarContato = () => {
    dispatch(contatosActions.addContato(nome, telefone, imagemURI));
    props.navigation.goBack();
  }

  const fotoTirada = (imagemURI) => {
    setImagemURI(imagemURI);
  }

  return (
    <ScrollView>
      <View style={estilos.form}>
        <Text style={estilos.titulo}>Novo Contato</Text>
        <TextInput
          style={estilos.textInput}
          placeholder="Digite seu nome..."
          onChangeText={capturarNome}
          value={nome}
        />
        <TextInput
          style={estilos.textInput}
          placeholder="Digite seu numero de telefone..."
          onChangeText={capturarTelefone}
          value={telefone}
        />
        <TiraFoto onFotoTirada={fotoTirada} />
        <Button
          color={Cores.button}
          title="Adicionar Contato"
          onPress={() => {
            adicionarContato();
            setNome("");
            setTelefone("");
          }}
        />
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  form: {
    margin: 30,
  },
  titulo: {
    fontSize: 18,
    marginBottom: 12,
  },
  textInput: {
    borderBottomColor: "#CCC",
    borderBottomWidth: 2,
    marginBottom: 12,
    paddingVertical: 8,
  },
});

export default NovoContatoTela; 