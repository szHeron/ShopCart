import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Title } from 'react-native-paper';
import { styles } from './styles';

export default function Home({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Palhano Perfumaria</Title>
            <Button onPress={navigation.navigate('Products')}>PRODUTOS</Button>
        </SafeAreaView>
    )
};