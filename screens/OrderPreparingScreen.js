import { View, Text, Image } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const OrderPreparing = () => {
    const navigation = useNavigation();
    useEffect(() => {
        setTimeout(() => {
            // move to delivery screen
            navigation.navigate('DeliveryScreen');
        }, 3000);
    });
    return (
        <View className="flex-1 bg-white justify-center items-center">
            <Image
                source={require('../assets/images/delivery.gif')}
                className="h-80 w-80"
            />
            <Text>Preparing your order</Text>
        </View>
    );
};

export default OrderPreparing;
