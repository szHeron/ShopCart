import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar, FAB, Button, Text } from 'react-native-paper';
import { styles } from './styles';

export default function Home(){
    const [text, setText] = useState('');
    
    return(
        <View style={{width: '100%'}}>
            <View style={styles.container}>
                <Searchbar
                    style={styles.SearchBarStyle}
                    placeholder="Pesquisar produto..."
                    value={text}
                    onChangeText={text => setText(text)}
                />
                <FAB icon="tune" style={styles.filterButton}/>
            </View>
            <View style={styles.containerButtons}>
                <Button color="#add" mode="contained">Femininos</Button>
                <Button color="#add" mode="outlined">Masculinos</Button>
                <Button color="#add" mode="outlined">Infantis</Button>
            </View>
        </View>
    )
};