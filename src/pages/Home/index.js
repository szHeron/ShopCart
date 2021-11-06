import React from 'react';
import { SafeAreaView } from 'react-native';
import { Title } from 'react-native-paper';
import ButtonNavigation from '../../components/ButtonNavigation';
import { styles } from './styles';

export default function Home({navigation}){
    return(
        <SafeAreaView style={styles.container}>
            <Title style={styles.title}>Palhano Perfumaria</Title>
            <ButtonNavigation navigation={navigation}/>
        </SafeAreaView>
    )
};