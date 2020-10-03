import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import Cores from '../constantes/Cores';

const ItemContato = (props) => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.lugarItem}>
      <Image style={styles.imagem} source={{ uri: props.imagem }} />
      <View style={styles.infoContainer}>
        <Text style={styles.nomeLugar}>{props.nomeContato}</Text>
        <Text style={styles.endereco}>{props.telefoneContato}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  lugarItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 3,
    backgroundColor: "#ccc",
    borderColor: Cores.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  nomeLugar: {
    color: "black",
    fontSize: 18,
    marginBottom: 8,
  },
  endereco: {
    color: "#777",
    fontSize: 16,
  },
});

export default ItemContato;