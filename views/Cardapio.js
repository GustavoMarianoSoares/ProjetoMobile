import React,{useState} from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

import {css} from '../assets/css/css'

export default function Cardapio({navigation}) {
    const [people, setPeople] = useState([
        {name: 'Feijoada', id:'1'},
        {name: 'Arroz', id:'2'},
    ]);

    return (
        <View style={css.container}>

            <FlatList
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={() => navigation.navigate('Comida')}>
                        <Text style={css.texto}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />

        </View>
    )
}
