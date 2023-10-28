import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { themeColors } from '../theme/index';
import RestaurantCard from './restaurantCard';

const FeaturedRow = ({ title, description, restaurants }) => {
    return (
        <View>
            <View className="flex-row justify-between items-center px-4">
                <View>
                    <Text className="font-bold text-lg">{title}</Text>
                    <Text className="text-slate-500 text-xs">
                        {description}
                    </Text>
                </View>
                <TouchableOpacity>
                    <Text style={{ color: themeColors.text }}>See All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 15,
                }}
                className="overflow-visible py-5"
            >
                {restaurants.map((restaurant, index) => (
                    <RestaurantCard key={index} item={restaurant} />
                ))}
            </ScrollView>
        </View>
    );
};

export default FeaturedRow;
