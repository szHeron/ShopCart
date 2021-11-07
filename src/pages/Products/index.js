import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Text, Title } from 'react-native-paper';
import SearchBar from '../../components/SearchBar/index';
import ProductList from '../../components/ProductList/index'
import { styles } from './styles';

export default function Products({navigation}){
    const [filters, setFilters] = useState({
        masculine: false,
        feminine: false,
        childish: false,
        crescent: false,
        decreasing: false,
        name: ''
    });

    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Produtos</Title>
            <SearchBar filters={filters} setFilters={setFilters}/>
            <ProductList filters={filters} navigation={navigation}/>
        </SafeAreaView>
    )
};