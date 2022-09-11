import React from 'react';
import { View, FlatList, TouchableOpacity, Image } from 'react-native';
import { Headline, Text, Button } from 'react-native-paper';
import { data } from '../../services/data';
import { styles } from './styles';

export default function ProductList({navigation, filters}){
    const renderPerfumes = ({ item }) => {
        return (
            <View style={styles.conteinerPerfumes}>
                <Image source={{uri: item.img}} style={styles.perfumeImg}/>
                <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                <Text>{item.brand}</Text>
                <Text style={styles.textPerfumePrice}>R$ {item.price}</Text>
                <Text style={styles.textPerfumeParcel}>ou 6x de {(item.price/6).toFixed(2)}</Text>
                <Button color="#add" mode="contained" onPress={() => navigation.navigate('Product',{item: item})}>Visualizar</Button>
            </View>
        );
    };

    function filterData(item) {
        if(filters.name.length === 0 || item.name.toLowerCase().includes(filters.name.toLowerCase()))
            if((!filters.masculine && !filters.feminine && !filters.childish) || (filters.masculine && filters.feminine && filters.childish)) {
                return true;
            } else if(filters.masculine && item.masculine){
                return true;
            } else if(filters.feminine && item.feminine){
                return true;
            } else if(filters.childish && item.childish){
                return true;
            }
    }

    let filteredData = data.filter(filterData).sort((a, b)=>{
        if(filters.crescent){
            if (a.price > b.price) {
                return 1;
            }
            if (a.price < b.price) {
                return -1;
            }
        }else{
            if (a.price < b.price) {
                return 1;
            }
            if (a.price > b.price) {
                return -1;
            }
        }

        return 0;
        }
    );

    return(
        <View>
            <FlatList
                data={filteredData}
                renderItem={renderPerfumes}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={{alignItems: "stretch"}}
            />
        </View>
    )
};