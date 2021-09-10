import React,{useState, useEffect} from 'react'
import { View, Text, FlatList, TouchableOpacity, SafeAreaView  } from 'react-native'
import {BarCodeScanner} from 'expo-barcode-scanner' 

import {css} from '../assets/css/css'

export default function Cardapio({navigation}) {
    //Futura API
    const [people, setPeople] = useState([
        {name: 'Feijoada', id:'1'},
        {name: 'Arroz', id:'2'}
    ]);

    //Leitura QR Code
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [displayQR, setDisplayQR] = useState('flex');

    useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
    }, []);

    async function handleBarCodeScanned ({ type, data }){
    setScanned(true);
    alert(`Você está na mesa ${data}`);
    setDisplayQR('none')
    }

    return (
        <SafeAreaView style={css.container}>
            <BarCodeScanner
                onBarCodeScanned={scanned? undefined : value=> handleBarCodeScanned(value)}
                style={css.qr__code(displayQR)}
             />
             
            <FlatList
                keyExtractor={(item) => item.id}
                data={people}
                renderItem={({item}) =>(
                    <TouchableOpacity onPress={() => navigation.navigate('Comida')}>
                        <Text style={css.texto}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    )
}
