import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Product from '../pages/Product';

export default function StackNavigation() {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeStack" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
}