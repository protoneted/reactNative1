import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import SlpashScreen from "../screens/splashScreen";
import AuthenticationOptionScreen from "../screens/authOptions";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
import HomeScreen from "../screens/HomeScreen";
import RequestScreen from "../screens/RequestScreen";
import { Image, View } from "react-native";
import Images from "../assets/Images";
import ProfileScreen from "../screens/profileScreen";
const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export function InitialRoutes() {

    return (
        <>
            
                <stack.Navigator>
                    <stack.Screen name='Splash' component={SlpashScreen} options={{ headerShown: false }} />
                    <stack.Screen name='AuthOptions' component={AuthenticationOptionScreen} options={{ headerShown: false }} />
                    <stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
                    <stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
                    <stack.Screen name='MainStack' component={BottomNavigations} options={{ headerShown: false }} />
                </stack.Navigator>
        </>
    );
}

export const BottomNavigations = () => {
    return(
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = Images.tabHomeIcon
              } else if (route.name === 'Requests') {
                iconName = Images.tabRequestIcon
              } else if (route.name === 'Profile') {
                iconName = Images.tabProfileIcon
              }
  
              // You can return any component that you like here!
              return <Image source={iconName} style={{width:25, height:25, tintColor: focused ? 'brown' :'gray'}} />;
            },
            tabBarActiveTintColor: 'brown',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{backgroundColor:"#fff"},
              // You can return any component that you like here!
              tabBarBackground:(()=>{
                return(
                    <></>
                    // <View style={{flex:1, backgroundColor:"black"}}></View>
                )
            }),
          })}>
            <Tab.Screen name="Home" component={HomeScreenStack} />
            <Tab.Screen name="Requests" component={RequestScreen} />
            <Tab.Screen name="Profile" component={ProfileScreenStack} />
        </Tab.Navigator>
    )
}

export const ProfileScreenStack = () => {
    return(
        <stack.Navigator>
        <stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false }} />
    </stack.Navigator>
    )
}

export const HomeScreenStack = () => {
    return(
        <stack.Navigator>
        <stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false }} />
        <stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
    </stack.Navigator>
    )
}