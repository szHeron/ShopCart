import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartProvider } from "./src/context/CartContext";
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Product from './src/pages/Product';
import Cart from './src/pages/Cart';
import SignIn from './src/pages/SignIn';
import SignUp from './src/pages/SignUp';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <CartProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Products" component={Products} options={{headerShown: false}}/>
            <Stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
            <Stack.Screen name="Cart" component={Cart} options={{headerShown: false}}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
          </Stack.Navigator>
        </CartProvider>
      </NavigationContainer>
  );
}