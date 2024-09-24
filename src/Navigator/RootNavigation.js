import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import TutorialScreen from "../screens/TutorialScreen";
import LoginScreen from "../screens/LoginScreen";
import ForgotPass from "../screens/ForgotPassword";
import ResetPass from "../screens/ResetPassword";
import HomeScreen from "../screens/HomeScreen";
import BottomNav from "./BottomTab/BottomTab";
import FAScreen from "../screens/FAScreen";
import VerifyOTP from "../screens/VerifyOTP";

const Stack = createNativeStackNavigator()

export default class RootNavigation extends React.Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="splash"
                        component={SplashScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="tutorial"
                        component={TutorialScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="login"
                        component={LoginScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="forgot"
                        component={ForgotPass}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="reset"
                        component={ResetPass}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="home"
                        component={BottomNav}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="fa"
                        component={FAScreen}
                        options={{headerShown: false}}
                    />
                    <Stack.Screen
                        name="otp"
                        component={VerifyOTP}
                        options={{headerShown: false}}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}