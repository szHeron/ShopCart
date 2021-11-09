import React, { useContext } from 'react';
import { SafeAreaView, Image, View, ScrollView } from 'react-native';
import { Title, Text, Button } from 'react-native-paper';
import CartContext from '../../context/CartContext';
import { styles } from './styles';

export default function Product({navigation, route}){
    const { AddCart } = useContext(CartContext);

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.ProductContent}>
                <Image style={{width: 250, height: 250}} source={{uri: route.params.item.img}}/>
                <Text style={{fontSize: 30}}>{route.params.item.name}</Text>
                <Text style={{fontSize: 18, marginBottom: 10}}>{route.params.item.brand}</Text>
                <Text style={{fontSize: 24, color: 'green'}}>Por R$ {route.params.item.price}</Text>
                <Text style={{fontSize: 18}}>Ou 6x de R$ {(route.params.item.price/6).toFixed(2)}</Text>
            </View>
            <ScrollView>
                <Text style={{fontSize: 16}}>{route.params.item.description}</Text>
            </ScrollView>
        </SafeAreaView>
    )
};