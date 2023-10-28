import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { themeColors } from '../theme';
import * as Icon from 'react-native-feather';
import Dish from '../components/dish';
import CartIcon from '../components/cartIcon';
import { StatusBar } from 'expo-status-bar';
import { useDispatch } from 'react-redux';
import { setResturant } from '../slices/resturantSlice';
const ResturantScreen = () => {
    const { params } = useRoute();
    let item = params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        if (item && item.id) {
            dispatch(setResturant({ ...item }));
        }
    }, []);
    return (
        <View>
            <CartIcon />
            <StatusBar style="light" />
            <ScrollView>
                <View className="relative">
                    <Image className="w-full h-72" source={item.image} />
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="absolute top-14 left-4 bg-slate-50 p-2 rounded-full shadow"
                    >
                        <Icon.ArrowLeft
                            strokeWidth={3}
                            stroke={themeColors.bgColor(1)}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        borderTopLeftRadius: 40,
                        borderTopRightRadius: 40,
                    }}
                    className="bg-white -mt-12 pt-6"
                >
                    <View className="px-5">
                        <Text className="text-3xl font-bold">{item.name}</Text>
                        <View className="flex-row space-x-2 my-1">
                            <View className="flex flex-row items-center space-x-1">
                                <Image
                                    source={require('../assets/images/fullStar.png')}
                                    className="h-4 w-4"
                                />
                                <Text className="text-xs">
                                    <Text className="text-green-700">
                                        {item.stars}
                                    </Text>
                                    <Text>
                                        ({item.reviews} review) .{' '}
                                        <Text className="font-semibold">
                                            {item.category}
                                        </Text>
                                    </Text>
                                </Text>
                            </View>
                            <View className="flex flex-row items-center space-x-1">
                                <Icon.MapPin
                                    color="gray"
                                    width="15"
                                    height="15"
                                />

                                <Text className="text-xs">
                                    Nearby: 15mins ... street
                                </Text>
                            </View>
                        </View>
                        <View>
                            <Text className="text-slate-500 mt-2">
                                {item.description}
                            </Text>
                        </View>
                    </View>
                </View>
                <View className="pb-36 bg-white">
                    <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
                    {/* Dishes */}
                    {item.dishes.map((dish, index) => (
                        <Dish item={{ ...dish }} key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default ResturantScreen;
