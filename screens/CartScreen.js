import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import { featured } from '../constants';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { selectResturant } from '../slices/resturantSlice';
import {
    selectCartItems,
    selectCartTotal,
    removeFromCart,
} from '../slices/cartSlice';
const CartScreen = () => {
    const resturant = useSelector(selectResturant);
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [groupedItems, setGoupedItems] = useState({});

    useEffect(() => {
        const items = cartItems.reduce((group, item) => {
            if (group[item.id]) {
                group[item.id].push(item);
            } else {
                group[item.id] = [item];
            }
            return group;
        }, {});
        setGoupedItems(items);
    }, [cartItems]);
    return (
        <View className="bg-white flex-1">
            {/* Back Button */}
            <View className="realtive py-4 shadow-sm">
                <TouchableOpacity
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                    onPress={() => navigation.goBack()}
                >
                    <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">
                        {' '}
                        Your Cart
                    </Text>
                    <Text className="text-center text-slate-500">
                        {resturant.name}
                    </Text>
                </View>
            </View>
            {/* delivery time */}
            <View
                style={{ backgroundColor: themeColors.bgColor(0.2) }}
                className="flex-row px-4 items-center"
            >
                <Image
                    source={require('../assets/images/bikeGuy.png')}
                    className="w-20 h-20 rounded-full"
                />
                <Text className="flex-1 pl-4">Delivery in 20-30minutes</Text>
                <TouchableOpacity>
                    <Text
                        className="font-bold"
                        style={{ color: themeColors.text }}
                    >
                        Change
                    </Text>
                </TouchableOpacity>
            </View>

            <ScrollView
                showVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 50 }}
                className="bg-white pt-5"
            >
                {Object.entries(groupedItems).map(([key, items]) => {
                    let dish = items[0];
                    return (
                        <View
                            key={key}
                            className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mb-3 shadow-lg"
                        >
                            <Text
                                className="font-bold"
                                style={{ color: themeColors.text }}
                            >
                                {items.length} x
                            </Text>
                            <Image
                                className="h-14 w-14 rounded-full"
                                source={dish.image}
                            />
                            <Text className="flex-1 font-bold text-slate-700">
                                {dish.name}
                            </Text>
                            <Text className="font-bold text-slate-700">
                                N{dish.price}
                            </Text>
                            <TouchableOpacity
                                onPress={() =>
                                    dispatch(removeFromCart({ id: dish.id }))
                                }
                                className="p-1 rounded-full"
                                style={{
                                    backgroundColor: themeColors.bgColor(1),
                                }}
                            >
                                <Icon.Minus
                                    strokeWidth={2}
                                    height={20}
                                    width={20}
                                    stroke="white"
                                />
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </ScrollView>
            {/* total */}
            <View
                className="p-6 px-8 rounded-t-3xl space-y-4"
                style={{ backgroundColor: themeColors.bgColor(0.2) }}
            >
                <View className="flex-row justify-between">
                    <Text className="text-slate-700">Subtotal</Text>
                    <Text className="text-slate-700">N{cartTotal}</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-slate-700">Delivery Fee</Text>
                    <Text className="text-slate-700">N2,000</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-slate-700 font-extrabold">
                        Order Total
                    </Text>
                    <Text className="text-slate-700 font-extrabold">
                        N{cartTotal + 2000}
                    </Text>
                </View>
                <TouchableOpacity
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="p-3 rounded-full"
                    onPress={() => navigation.navigate('OrderPreparingScreen')}
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CartScreen;