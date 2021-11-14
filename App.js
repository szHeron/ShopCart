import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { IconButton } from 'react-native-paper';
import { CartProvider } from "./src/context/CartContext";
import Home from './src/pages/Home';
import Products from './src/pages/Products';
import Product from './src/pages/Product';
import Cart from './src/pages/Cart';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeStack" component={Home} options={{headerShown: false}}/>
      <Stack.Screen name="Product" component={Product} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
      <NavigationContainer>
        <CartProvider>
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
            <Tab.Screen name="Inicio" component={HomeStack} options={{headerShown: false}}/>
            <Tab.Screen name="Produtos" component={Products} options={{headerShown: false}}/>
            <Tab.Screen name="Carrinho" component={Cart} options={{headerShown: false}}/>
          </Tab.Navigator>
        </CartProvider>
      </NavigationContainer>
  );
}