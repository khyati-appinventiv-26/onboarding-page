import { StyleSheet, Dimensions } from "react-native";

const {width} = Dimensions.get('window');

export default StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      padding: 20,
    },
    scrollView: {
      flex: 1,
    },
    screen: {
      width: width,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    imgStyle: {
      height: '60%',
      width: '100%',
    },
    description: {
      fontSize: 16,
      color: '#666',
      marginTop: 10,
      textAlign: 'center',
    },
    dotContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: 20,
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginHorizontal: 5,
    },
    activeDot: {
      backgroundColor: '#333',
    },
    inactiveDot: {
      backgroundColor: '#ccc',
    },
    btnView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
      padding: 30,
    },
    btnlogin: {
      marginRight: 20,
      backgroundColor: 'rgb(3,151,254)',
      height: 45,
      width: 100,
      borderRadius: 12,
      justifyContent: 'center',
    },
    loginTxt: {
      color: 'white',
      textAlign: 'center',
      fontWeight: '500',
    },
  });