import { StyleSheet } from "react-native";

export default StyleSheet.create({
    placeholderStyle: {
        position: 'absolute',
        paddingLeft: 50,
        color: '#60707D',
        fontSize: 14,
        backgroundColor: 'transparent',
    },
    errorTxt: {
        
        marginTop: 6,
        fontSize: 14,
        marginLeft: 6
    },
    errorView : {
        flexDirection: 'row',
        paddingVertical: 4
    },
    alertStyle: {
        marginTop: 6,

    },
    imgLeft: {
        tintColor: 'red'
    },
    eyeView: {
        position: 'absolute',
        top : 20,
        right: 20
    },
    validationContainer: {
        marginTop: 10,
    },
    valid: {
        color: 'black',
        marginLeft: 9
    },
    invalid: {
        color: 'black',
        marginLeft: 9
    },
    outerView : {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center'
        
    }
})