import React, { useEffect } from "react";

import { View, StyleSheet, Text, Platform, FlatList } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import BotaoCabecalho from "../components/BotaoCabecalho";
import ItemContato from "../components/ItemContato";
import * as contatosActions from '../store/contatos.action';

const ListaDeContatoTela = (props) => {
  const contatos = useSelector((estado) => estado.contatos.contatos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contatosActions.listarContato);
  }, [dispatch]);

  return (
    <View>
      <FlatList
        data={contatos}
        keyExtractor={(contato) => contato.id}
        renderItem={(contato) => {
          return (
            <ItemContato
              nomeContato={contato.item.nome}
              telefoneContato={contato.item.telefone}
              onSelect={() => {
                props.navigation.navigate('DetalhesDoContato', {
                  nomeContato: contato.item.nome,
                  telefoneContato: contato.item.telefone,
                  idContato: contato.item.id
                })
              }}
              imagem={contato.item.imagemURI}
            />
          );
        }}
      />
    </View>
  );
};

ListaDeContatoTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de Contatos",
    headerRight: () =>
      <HeaderButtons HeaderButtonComponent={BotaoCabecalho}>
        <Item
          title="Adicionar"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => dadosNavegacao.navigation.navigate("NovoContato")}
        />
      </HeaderButtons>,
  };
};

export default ListaDeContatoTela;
