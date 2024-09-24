
import { StyleSheet } from "react-native";

export default  StyleSheet.create({
    container: {
      flexDirection: 'row', 
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth:1,
      borderBottomColor:'#ebecec'
      // backgroundColor: 'gray', // Background for the whole component
    },
    avatarContainer: {
      marginRight: 10,
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20, // Circular avatar
      backgroundColor: '#6067b2', // Purple background
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
    textContainer: {
      flex: 1,
    },
    titleText: {
      fontSize: 15,
      fontWeight: '600',
      color: '#1E3A5F', // Darker color for the title
    },
    messageText: {
      fontSize: 14,
      fontWeight:'500',
      color: '#7A8A99', // Gray color for the message
    },
    timeText: {
      color: '#7A8A99', // Gray color for the timestamp
      fontSize: 12,
    },
  });
  
 
  