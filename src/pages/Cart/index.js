import React, { useContext } from 'react';
import { SafeAreaView, FlatList, View, Image, TouchableOpacity } from 'react-native';
import { Title, Text, Button, FAB } from 'react-native-paper';
import CartContext from '../../context/CartContext';
import { styles } from './styles';

export default function Cart({navigation}){
    const { cart, RemoveCart } = useContext(CartContext);

    const renderPerfumes = ({ item }) => {
        return (
            <View style={styles.conteinerPerfumes}>
                <Image style={styles.perfumeImg} source={{uri: item.img}}/>
                <View>
                    <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                    <Text>{item.brand}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 17, color: 'green'}}>R$ {item.price}</Text>
                    <Text style={{fontWeight: 'bold', fontSize: 17, marginBottom: 10}}>ou 6x de {(item.price/6).toFixed(2)}</Text>
                </View>
                <FAB 
                    icon="close" 
                    onPress={()=>RemoveCart(item.id)} 
                    small 
                    color="#000" 
                    style={{backgroundColor: "#fff", marginLeft: 75}}
                />
            </View>
        );
    };

    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Carrinho</Title>
            <FlatList
                data={cart}
                renderItem={renderPerfumes}
                keyExtractor={(item) => item.id}
                numColumns={1}
                style={{flex: 1}}
            />
        </SafeAreaView>
    )
};