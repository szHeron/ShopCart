import React from 'react';
import { IconButton } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from './Stack';
import Products from '../pages/Products';
import Cart from '../pages/Cart';

export default function TabNavigation(){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
                if (route.name === 'Inicio') {
                  iconName = 'home';
                } else if (route.name === 'Produtos') {
                  iconName = 'basket';
                } else if (route.name === 'Carrinho') {
                  iconName = 'cart';
                }
                return <IconButton icon={iconName} color={focused?'#f00':'#000'} size={30}/>;
              },
              tabBarActiveTintColor: 'tomato',
              tabBarInactiveTintColor: 'gray',
            })}
          >
            <Tab.Screen name="Inicio" component={StackNavigation} options={{headerShown: false}}/>
            <Tab.Screen name="Produtos" component={Products} options={{headerShown: false}}/>
            <Tab.Screen name="Carrinho" component={Cart} options={{headerShown: false}}/>
        </Tab.Navigator>
    )
}