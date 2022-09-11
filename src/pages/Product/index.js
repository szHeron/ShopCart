import React, { useContext } from 'react';
import { SafeAreaView, Image, View, ScrollView, Text } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
import CartContext from '../../context/CartContext';
import { styles } from './styles';

export default function Product({navigation, route}){
    const { AddCart } = useContext(CartContext);

    return(
        <SafeAreaView style={styles.container}>
            <IconButton style={styles.navigationButtonBack} onPress={()=>navigation.goBack()} icon='arrow-left' color='#000' size={26}/>
            <IconButton style={styles.favoriteButton} icon='cards-heart-outline' color='#000' size={26}/>
            <View style={styles.productContent}>
                <Image style={{width: 300, height: 350}} source={{uri: route.params.item.img}}/>
                <View style={{alignSelf: 'flex-start'}}>
                    <Text style={styles.textProductName}>{route.params.item.name}</Text>
                    <Text style={styles.textProductBrand}>{route.params.item.brand}</Text>
                </View>
            </View>
            <ScrollView style={{maxHeight: 100}}>
                <Text style={{fontSize: 16}}>{route.params.item.description}</Text>
            </ScrollView>
            <View style={styles.productSale}>
                <View>
                    <Text style={{fontWeight: '400'}}>Valor total:</Text>
                    <Text style={styles.textProductPrice}>R$ {route.params.item.price}</Text>
                </View>
                <Button onPress={()=>{AddCart(route.params.item);navigation.goBack();}} style={styles.buttonSendCart} mode="contained">
                    Adicionar ao carrinho
                </Button>
            </View>
        </SafeAreaView>
    )
};