import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    parentContainer: {
      backgroundColor: 'white',
      height: 110,
      width: 110,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconContainer: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#46a4ba',
      borderRadius: 100,
    },
    text: {
      marginTop: 10, // Space between icon and text
      fontSize: 16,
      color: '#000', // Black text color
      textAlign: 'center',
    },
    announcStyle: {
      height: 25,
      width: 25,
    },
  });