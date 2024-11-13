import React, { useEffect, useState } from "react";
import { Image, ImageBackground, Text, View } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SlpashScreen({ navigation }) {
    useEffect(() => {
        checkFirstLaunch();
    }, [])

const afterSplashScreen = (isFisrtLaunch) => {
    setTimeout(() => {
        isFisrtLaunch ? navigation.replace("AuthOptions") : navigation.replace("HomeScreen")
    }, 2000)
}
    const checkFirstLaunch = async () => {
        try {
            const isAppFirstLaunch = await AsyncStorage.getItem('FIRST_LAUNCH')
            if (isAppFirstLaunch === null) {
                    await AsyncStorage.setItem('FIRST_LAUNCH', 'false');
                    afterSplashScreen(true)
            } else {
                afterSplashScreen(false)
            }
        } catch (err1) {
            Alert("---err1---")
        }
    }


    const image = require("../assets/workerImage.png")
    return (
        <View style={{ flex: 1 }}>
            <Image source={image} resizeMode="contain" style={{ flex: 1, width: '100%', }} />
        </View>
    )
} 