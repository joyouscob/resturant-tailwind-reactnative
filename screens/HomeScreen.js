import { View, Text, Platform, TextInput, ScrollView } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { themeColors } from '../theme';
import Categories from '../components/categories';
import FeaturedRow from '../components/featuredRow';
import { featured } from '../constants/index';

const HomeScreen = () => {
    return (
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content" />
            <View className="flex flex-row items-center space-x-2 px-4 pb-2">
                <View className="flex flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput
                        placeholder="Resturants"
                        className="ml-2 flex-1"
                    />
                    <View className="flex flex-row items-center spaxe-x-1 border-0 border-l-2 pl-2 border-l-gray">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-slate-600">New York, NYC</Text>
                    </View>
                </View>
                <View
                    style={{ backgroundColor: themeColors.bgColor(1) }}
                    className="p-3 rounded-full"
                >
                    <Icon.Sliders
                        height="20"
                        width="20"
                        strokeWidth={2.5}
                        stroke="white"
                    />
                </View>
            </View>

            {/* Content Area */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20,
                }}
            >
                {/* categories */}
                <Categories />
                {/* featured row */}
                <View className="mt-5">
                    {[featured, featured, featured].map((item, index) => {
                        return (
                            <FeaturedRow
                                key={index}
                                title={item.title}
                                restaurants={item.restaurants}
                                description={item.description}
                            />
                        );
                    })}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default HomeScreen;
