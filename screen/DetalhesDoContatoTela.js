import React from 'react';

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

const DetalhesDoContatoTela = (props) => {
    return (
        <View>
            <Text>DetalhesDoContatoTela</Text>
        </View>
    )
}

DetalhesDoContatoTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam('nome')
    }
}

const estilos = StyleSheet.create({

});

export default DetalhesDoContatoTela;