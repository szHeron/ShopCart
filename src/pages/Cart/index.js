import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import SearchBar from '../../components/SearchBar/index';
import ProductList from '../../components/ProductList/index'
import { styles } from './styles';

export default function Cart({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Carrinhoa</Title>

        </SafeAreaView>
    )
};