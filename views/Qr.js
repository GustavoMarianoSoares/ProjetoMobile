import React from 'react'
import { View, Text, Button, TouchableOpacity, Image } from 'react-native'
import {css} from '../assets/css/css'

export default function Qr({navigation}) {
    return (
        <View style={css.container}>
            <TouchableOpacity
                onPress={()=>navigation.navigate('Cardápio')}
            >
            <Image
                source={require('../assets/img/camera.png')}
            />
            </TouchableOpacity>     
            <Text>Clique no icone acima para ler o QR Code de sua mesa</Text>
        </View>
    )
}
