import React, {useState, useEffect} from 'react'
import { View, Text,Image, Button } from 'react-native'

import {css} from '../assets/css/css'

export default function Comida() {

    const [quantity,setQuantity]=useState (0);

    return (
        <View style={css.container}>

            <Image
                source={require('../assets/img/bandeja.png')}
            />

            <Text style={css.texto2}>Descrição do produto</Text>

            <Text >Quantidade: {quantity}</Text>


            <View>
            <Button
                title="Adicionar"
                color="#FB6400"
                onPress={() => setQuantity(quantity + 1)}
            />

            <Button 
                title="Remover"
                color="#FB6400"
                onPress={() => setQuantity(quantity - 1)}
            />

            <Button
                title="Adicionar ao carrinho"
                color="#FB6400"
            />
            </View>

        </View>
    )
}
