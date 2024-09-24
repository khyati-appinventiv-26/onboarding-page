
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
  
} from 'react-native';
import styles from '../TutorialScreen/style';
import Button from '../../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width} = Dimensions.get('window');

const TutorialScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollViewRef = useRef(null);
  const autoScrollTimeout = useRef(null);

  const screens = [
    {
      icon: 'https://cdn.dribbble.com/users/2283963/screenshots/11354154/media/77cab85cda907e0ae4e1f2eacba52f1a.png',
      description: 'This is the first page of the tutorial',
    },
    {
      icon: 'https://cdn.dribbble.com/users/2283963/screenshots/11356291/media/ee38fd78f86e502384a7b06f0d045815.png',
      description: 'Swipe to learn how to use the app',
    },
    {
      icon: 'https://cdn.dribbble.com/users/2283963/screenshots/11354154/media/77cab85cda907e0ae4e1f2eacba52f1a.png',
      description: 'That’s it! You are ready to go!',
    },
  ];

  handleSetItem = async () => {
    await AsyncStorage.setItem('isVisited', 'true');
  };

  useEffect(() => {
    handleSetItem();
  }, []);

  useEffect(() => {
    startAutoScroll();
    return () => {
      clearAutoScroll();
    };
  }, [currentIndex]);

  const handleScroll = event => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
    clearAutoScroll();
    startAutoScroll();
  };

  const goToNextPage = () => {
    if (currentIndex < screens.length - 1) {
      scrollViewRef.current.scrollTo({
        x: (currentIndex + 1) * width,
        animated: true,
      });
    } else {
      scrollViewRef.current.scrollTo({x: 0, animated: true});
      setCurrentIndex(0);
    }
  };

  const startAutoScroll = () => {
    autoScrollTimeout.current = setTimeout(() => {
      goToNextPage();
    }, 5000);
  };

  const clearAutoScroll = () => {
    if (autoScrollTimeout.current) {
      clearTimeout(autoScrollTimeout.current);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        style={styles.scrollView}>
        {screens.map((screen, index) => (
          <View key={index} style={styles.screen}>
            <Image source={{uri: screen.icon}} style={styles.imgStyle} />
            <Text style={styles.description}>{screen.description}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.dotContainer}>
        {screens.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <View style={styles.btnView}>
        <Button
          style1={styles.btnlogin}
          onPress={() => {
            navigation.navigate('login');
            navigation.reset({index: 0, routes: [{name: 'login'}]});
            
          }}
          btnName='Login'
          style2={styles.loginTxt}/>
          
        
          <Button
          style1={styles.btnlogin}
          onPress={() => {
            navigation.navigate('signup');
            navigation.reset({index: 0, routes: [{name: 'signup'}]});
            
          }}
          btnName='Signup'
          style2={styles.loginTxt}/>
      </View>
    </View>
  );
};



export default TutorialScreen;
