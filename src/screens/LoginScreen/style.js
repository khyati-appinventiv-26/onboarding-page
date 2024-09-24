import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7edf3',
    },

    topView: {


        paddingVertical: 7,
        paddingHorizontal: 20,
        flex: 0.4,
    },
    gif: {
        marginTop: 50
    },
    text1: {
        color: '#FFFFFF',
        paddingTop: 12,
        fontSize: 29,
        fontWeight: 'bold',
    },
    text2: {
        color: '#FFFFFF',

    },
    flItems: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingRight: 15,



    },

    flTxt: {
        paddingLeft: 10,
        fontSize: 13,
        fontWeight: '400',
        color: '#F8F9F9'

    },

    flView: {
        padding: 10,
        marginTop: 10,
    },

    toastView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(240, 68, 56, 1)',
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginHorizontal: 20,
        borderRadius: 8,
        width: '80%',
        position: 'absolute',
        top: 50,
        alignSelf: 'center'

    },
    txtStyle: {
        marginLeft: 15,
        fontWeight: '500',
        fontSize: 13,
        color: 'white'
    },

    bottomView: {
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: '#e7edf3',
        height: '100%',
        flex: 0.6,

    },

    inputCont: {
        marginTop: 20,
        paddingBottom: 4
    },

    input: {
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        position: 'relative',
        paddingLeft: 52,

    },

    leftIcon: {
        height: 20,
        width: 20,
        position: 'absolute',
        top: 20,
        marginHorizontal: 20,

    },

    rightIcon: {
        height: 22,
        width: 22
    },
    txt1: {
        fontWeight: '700',
        fontSize: 24,
        marginBottom: 10
    },
    txt2: {
        color: '#4F5F72',
        fontWeight: '400',
        fontSize: 15
    },
    forgotTxt: {
        color: '#081017',
        fontWeight: '600',
        fontSize: 14,
        alignSelf: 'flex-end',
        paddingTop: 5,
        paddingBottom: 10
    },
    btnView: {
        padding: 18,
        backgroundColor: '#2A7BBB',
        marginTop: 5,
        borderRadius: 8

    },
    btnTxt: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '700',
        fontSize: 16
    },
    // hr: {
    //     borderBottomWidth: 
    // }

})