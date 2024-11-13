import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import SlpashScreen from "../screens/splashScreen";
import AuthenticationOptionScreen from "../screens/authOptions";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
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
                    <stack.Screen name='HomeScreen' component={BottomNavigations} options={{ headerShown: false }} />
                </stack.Navigator>
        </>
    );
}

export const BottomNavigations = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={ProfileScreenStack} />
            <Tab.Screen name="Requests" component={ProfileScreenStack} />
            <Tab.Screen name="Profile" component={ProfileScreenStack} />
        </Tab.Navigator>
    )
}

export const ProfileScreenStack = () => {
    return(
        <stack.Navigator>
        <stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
        <stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
    </stack.Navigator>
    )
}

export const HomeScreenStack = () => {
    return(
        <stack.Navigator>
        <stack.Screen name='SignIn' component={SignInScreen} options={{ headerShown: false }} />
        <stack.Screen name='SignUp' component={SignUpScreen} options={{ headerShown: false }} />
    </stack.Navigator>
    )
}