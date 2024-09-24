import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './style'
import { Images } from '../../assets';
import AsyncStorage from '@react-native-async-storage/async-storage';

class SplashScreen extends React.Component{

    constructor(props) {
        super(props)
    }
    
   async componentDidMount ()  {
        const isVisited = await AsyncStorage.getItem('isVisited');
        const isLoggedIn= await AsyncStorage.getItem('isLoggedIn')
       
            setTimeout(() => {
                if (isLoggedIn === 'true') {
                    return this.props.navigation.navigate('home');
                  }
                  if (isVisited === 'true') {
                    return this.props.navigation.navigate('login');
                  } else {
                    return this.props.navigation.navigate('tutorial');
                  }
             } , 3000)
        
    }
    render() {
        return (
            
            <View style={styles.container}>
                
                <Image source={Images.logo1}/>
            </View>
          );
        
    }
}
  




export default SplashScreen;
