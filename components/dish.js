import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart,
    removeFromCart,
    selectCartItems,
    selectCartItemsById,
} from '../slices/cartSlice';
const Dish = ({ item }) => {
    console.log(item);

    const dispatch = useDispatch();
    const totalItems = useSelector((state) =>
        selectCartItemsById(state, item.id)
    );

    const handleIncrease = () => {
        dispatch(addToCart({ ...item }));
    };
    const handleDecrease = () => {
        dispatch(removeFromCart({ id: item.id }));
    };
    return (
        <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
            <Image
                className="rounded-3xl"
                style={{ height: 100, width: 100 }}
                source={item.image}
            />
            <View className="flex flex-1 space-y-3">
                <View className="pl-3">
                    <Text className="text-xl">{item.name}</Text>
                    <Text className="text-slate-400">{item.description}</Text>
                </View>
                <View className="flex-row items-center justify-between pl-3">
                    <Text className="text-slate-700 text-lg font-bold">
                        N{item.price}
                    </Text>
                    <View className="flex-row items-center space-x-3">
                        <TouchableOpacity
                            onPress={handleDecrease}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Minus
                                strokeWidth={2}
                                height={25}
                                stroke={'white'}
                            />
                        </TouchableOpacity>
                        <Text className="px-1">{totalItems.length}</Text>
                        <TouchableOpacity
                            onPress={handleIncrease}
                            className="p-1 rounded-full"
                            style={{ backgroundColor: themeColors.bgColor(1) }}
                        >
                            <Icon.Plus
                                strokeWidth={2}
                                height={25}
                                stroke={'white'}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default Dish;
