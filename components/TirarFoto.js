import React, { useState } from 'react';
import { View, StyleSheet, Image, Button, Text } from 'react-native';

import Cores from '../constantes/Cores';

import * as ImagePicker from 'expo-image-picker';

const TiraFoto = (props) => {
    const [imagemURI, setImagemURI] = useState();

    const tirarFoto = async () => {
        const foto = await ImagePicker.launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 9],
            quality: 1
        });
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }

    return (
        <View style={estilos.principal}>
            <View style={estilos.previewImagem}>
                {
                    !imagemURI ?
                        <Text>Nenhuma foto.</Text>
                        :
                        <Image
                            source={{ uri: imagemURI }}
                            style={estilos.imagem} />
                }
            </View>
            <Button
                title="Tirar Foto"
                onPress={tirarFoto}
                color={Cores.button} />
        </View>
    );
}

const estilos = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 16
    },
    previewImagem: {
        width: '100%',
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#ccc',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
})

export default TiraFoto;