import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: '#E0F2FF', 
      borderRadius: 20, 
      padding: 8,
      alignItems: 'center',
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3, 
    },
    iconContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#E0F2FF',
      padding: 10,
    },
    textContainer: {
      marginLeft: 10,
    },
    titleText: {
      fontSize: 15,
      fontWeight:'700',
      paddingBottom:5,
      color: '#1E3A5F', // Darker blue color
    },
    subtitleText: {
      fontSize: 14,
      color: '#7A8A99', // Gray color for subtitle
    },
    setting:{
      height:40,
      width:40
    }
  });