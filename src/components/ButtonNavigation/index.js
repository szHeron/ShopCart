import React, { useState } from 'react'
import { BottomNavigation, Text } from 'react-native-paper';

export default function ButtonNavigation({navigation}){
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'home', title: 'Home', icon: 'home'},
        { key: 'products', title: 'Produtos', icon: 'widgets-outline' },
        { key: 'cart', title: 'Carrinho', icon: 'cart' }
    ]);

    renderScene = BottomNavigation.SceneMap({
        home: <Text>Home</Text>,
        products: <Text>teste</Text>,
        cart: <Text>teste</Text>
    });


    return(
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    )
}