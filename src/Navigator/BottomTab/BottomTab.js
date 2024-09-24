import React from 'react';
import {  Image,View,TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen/index';
import AccountScreen from '../../screens/Account';
import FavouriteScreen from '../../screens/Favourite';
import MenuScreen from '../../screens/Menu';
import { Icons } from '../../assets';
import LoginScreen from '../../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Tab = createBottomTabNavigator();

export default class BottomNav extends React.Component {
    
    constructor(props){
        super(props)
    }
    handleLogout = async() => {
        await AsyncStorage.setItem('isLoggedIn' ,'false')
        this.props.navigation.navigate('login')
        this.props.navigation.reset({index: 0, routes: [{name: 'login'}]})
    }
    render(){
        return(
            <Tab.Navigator>
                 <Tab.Screen
                    name='home'
                    component={HomeScreen}
                    options={{
                        headerShown:false,
                        title: "HOME",
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={Icons.home}
                                />
                            );
                        },
                    }}
                    
                />
                 <Tab.Screen
                    name='account'
                    component={AccountScreen}
                    options={{
                        title: "ACCOUNT",
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={Icons.user}
                                />
                            );
                        },
                    }}
                />
                 <Tab.Screen
                    name='favourite'
                    component={FavouriteScreen}
                    options={{
                        title: "FAVOURITE",
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                <Image
                                    style={{ width: size, height: size }}
                                    source={Icons.star}
                                />
                            );
                        },
                    }}
                />
                 <Tab.Screen
                    name='login'
                    component={LoginScreen}
                    options={{
                        title: "Logout",
                        tabBarIcon: ({ size, focused, color }) => {
                            return (
                                    <Image
                                    style={{ width: size, height: size }}
                                    source={Icons.menu}
                                    />
                            );
                        },
                        tabBarButton: props => <TouchableOpacity {...props} onPress={()=> this.handleLogout()}>
                        
                    </TouchableOpacity>
                    }}
                />
            </Tab.Navigator>
           
        )
    }
}

