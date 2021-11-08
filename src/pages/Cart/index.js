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
                        <Text style={{fontWeight: 'bold', fontSize: 17, color: 'green'}}>R$ {item.item.price}</Text>
                        <Text style={{fontWeight: 'bold', fontSize: 17}}>ou 6x de {(item.item.price/6).toFixed(2)}</Text>
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

    const subtotal = cart.reduce((acc, obj)=>{
        acc += obj.item.price * obj.amount;
        return acc;
    }, {})

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
            <Title style={styles.title}>Total</Title>
            <Divider/>
            <View>
                <Text>Subtotal</Text>
                <Text>{Number(subtotal.replace(/[\d\.\,]+/g,'')).toFixed(2)}</Text>
            </View>
        </SafeAreaView>
    )
};