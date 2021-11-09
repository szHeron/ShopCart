import React, { useContext, useState } from 'react';
import { SafeAreaView, FlatList, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import { Title, Text, Button, FAB, TextInput, Divider } from 'react-native-paper';
import CartContext from '../../context/CartContext';
import { styles } from './styles';

export default function Cart({navigation}){
    const { cart, RemoveCart, AddCart } = useContext(CartContext);

    const renderPerfumes = ({item}) => {
        return (
            <View style={styles.conteinerPerfumes}>
                <View style={{flexDirection: 'row'}}>
                    <Image style={styles.perfumeImg} source={{uri: item.item.img}}/>
                    <View>
                        <Text style={{fontWeight: 'bold'}}>{item.item.name}</Text>
                        <Text>{item.item.brand}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17, color: 'green'}}>R$ {(item.item.price*item.amount).toFixed(2)}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>ou 6x de {(item.item.price*item.amount/6).toFixed(2)}</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <FAB
                                icon="minus" 
                                onPress={()=>AddCart(item.item, item.amount - 1)} 
                                color="#000" 
                                style={styles.arrowIcon}
                            />
                            <TextInput
                                value={item.amount.toString()}
                                mode="outlined"
                                keyboardType="numeric"
                                style={styles.qtdInput}
                                mode="flat"
                                onChangeText={qtd => AddCart(item.item,Number(qtd.replace(/[^0-9]/g,'')))}
                            />
                            <FAB
                                icon="plus" 
                                onPress={()=>AddCart(item.item, item.amount + 1)} 
                                color="#000" 
                                style={styles.arrowIcon}
                            />
                        </View>
                        {item.amount <= item.item.stock?
                            <View style={styles.StockResult}>
                                <Text>Em estoque</Text> 
                                <FAB 
                                    icon="close" 
                                    color="#fff" 
                                    style={{alignItems: 'center', justifyContent: 'center', backgroundColor: "#00ff00", marginLeft: 5, height: 20, width: 20}}
                                />
                            </View>
                        :
                            <View style={styles.StockResult}>
                                <Text>Sem estoque</Text> 
                                <FAB 
                                    icon="close" 
                                    color="#fff" 
                                    style={{alignItems: 'center', justifyContent: 'center', backgroundColor: "#f00", marginLeft: 5,height: 20, width: 20}}
                                />
                            </View>
                        }
                    </View>
                </View>
                <FAB 
                    icon="close" 
                    onPress={()=>RemoveCart(item.item.id)} 
                    small 
                    color="#000" 
                    style={{backgroundColor: "#fff"}}
                />
            </View>
        );
    };

    const discount = 0;
    
    const subtotal = cart.length > 0?cart.reduce((acc, obj)=>{
        if(typeof acc == 'object')
            acc = 0
        acc += obj.item.price * obj.amount;
        return acc;
    }, {}):0;

    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Carrinho</Title>
            <FlatList
                data={cart}
                renderItem={renderPerfumes}
                keyExtractor={(item) => item.item.id}
                numColumns={1}
                style={{flex: 1}}
            />
            <Title style={styles.title}>Valor da compra</Title>
            <View style={styles.prices}>
                <Text>Subtotal</Text>
                <Text style={{color: '#00ff00'}}>R$ {subtotal.toFixed(2)}</Text>
            </View>
            <View style={styles.prices}>
                <Text>Descontos</Text>
                <Text style={{color: '#f00'}}>R$ -{discount}</Text>
            </View>
            <View style={{...styles.prices, marginTop: 20, borderTopColor: '#000', borderTopWidth: 1}}>
                <Text style={{fontWeight: 'bold'}}>TOTAL</Text>
                <Text>R$ {(subtotal - discount).toFixed(2)}</Text>
            </View>
        </SafeAreaView>
    )
};