import React from 'react';
import { View, ScrollView } from 'react-native';
import { Searchbar, FAB, Button } from 'react-native-paper';
import { styles } from './styles';

export default function SearchBar({setFilters, filters}){
    return(
        <View style={{width: '100%'}}>
            <View style={styles.container}>
                <Searchbar
                    style={styles.SearchBarStyle}
                    placeholder="Pesquisar produto..."
                    value={filters.name}
                    onChangeText={text => setFilters({...filters, name: text})}
                />
            </View>
            <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
                <Button style={{marginRight: 5}} color="#add" mode={filters.feminine?"contained":"outlined"} onPress={()=>setFilters({...filters, feminine: !filters.feminine})}>Femininos</Button>
                <Button style={{marginRight: 5}} color="#add" mode={filters.masculine?"contained":"outlined"} onPress={()=>setFilters({...filters, masculine: !filters.masculine})}>Masculinos</Button>
                <Button style={{marginRight: 5}} color="#add" mode={filters.childish?"contained":"outlined"} onPress={()=>setFilters({...filters, childish: !filters.childish})}>Infantis</Button>
                <Button style={{marginRight: 5}} color="#add" mode={filters.crescent?"contained":"outlined"} onPress={()=>setFilters({...filters, crescent: !filters.crescent, decreasing: filters.crescent})}>Crescente</Button>
                <Button color="#add" mode={filters.decreasing?"contained":"outlined"} onPress={()=>setFilters({...filters, decreasing: !filters.decreasing, crescent: filters.decreasing})}>Decrescente</Button>
            </ScrollView>
        </View>
    )
};