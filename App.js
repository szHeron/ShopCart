import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import TabNavigation from './src/routes/Tab';

export default function App() {
  return (
      <NavigationContainer>
        <CartProvider>
          <TabNavigation/>
        </CartProvider>
      </NavigationContainer>
  );
}