import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import SearchBar from '../../components/SearchBar/index';
import ProductList from '../../components/ProductList/index'
import { styles } from './styles';

export default function Products({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Produtos</Title>
            <SearchBar/>
            <ProductList navigation={navigation}/>
        </SafeAreaView>
    )
};