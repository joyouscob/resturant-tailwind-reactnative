import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ResturantScreen from './screens/ResturantScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

function Navigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen
                    name="ResturantScreen"
                    component={ResturantScreen}
                />
                <Stack.Screen
                    name="CartScreen"
                    options={{ presentation: 'modal' }}
                    component={CartScreen}
                />
                <Stack.Screen
                    name="OrderPreparingScreen"
                    options={{ presentation: 'modal' }}
                    component={OrderPreparingScreen}
                />
                <Stack.Screen
                    name="DeliveryScreen"
                    component={DeliveryScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;
