import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import SearchBar from '../../components/SearchBar/index';
import ProductList from '../../components/ProductList/index'
import { styles } from './styles';

export default function Home(){
    return(
        <View style={styles.container}>
            <Title style={styles.title}>Perfumaria</Title>
            <SearchBar/>
            <ProductList/>
        </View>
    )
};