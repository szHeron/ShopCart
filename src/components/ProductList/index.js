import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Headline, Text, Button } from 'react-native-paper';
import { data } from '../../services/data';
import { styles } from './styles';

export default function ProductList({navigation}){
    const renderPerfumes = ({ item }) => {
        return (
            <View style={styles.conteinerPerfumes}>
                <Image source={{uri: item.img}} style={styles.perfumeImg}/>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>{item.brand}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17, color: 'green'}}>R$ {item.price}</Text>
                <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 10}}>ou 6x de {(item.price/6).toFixed(2)}</Text>
                <Button color="#add" mode="contained" onPress={() => navigation.navigate('Product',{item: item})}>Comprar</Button>
            </View>
        );
    };

    return(
        <View style={{flex: 1}}>
            <FlatList
                data={data}
                renderItem={renderPerfumes}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </View>
    )
};