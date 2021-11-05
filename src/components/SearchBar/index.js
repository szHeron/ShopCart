import React, { useState } from 'react';
import { View } from 'react-native';
import { Searchbar, FAB } from 'react-native-paper';
import { styles } from './styles';

export default function Home(){
    const [text, setText] = useState('');
    
    return(
        <View style={styles.container}>
            <Searchbar
                style={styles.SearchBarStyle}
                placeholder="Pesquisar produto..."
                value={text}
                onChangeText={text => setText(text)}
            />
            <FAB icon="tune" style={styles.filterButton}/>
        </View>
    )
};