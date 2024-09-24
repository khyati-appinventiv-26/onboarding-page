import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e7edf3',
        padding: 30
    },

    arrowView: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        borderRadius: 8,
        padding: 10,
        width: 48,
        marginTop: 40

    },
    img: {
        alignSelf: 'center'
    },
    txt1: {
        paddingTop: 30,
        fontWeight: '700',
        fontSize: 24
    },
    txt2: {
        paddingTop: 10,
        color: 'rgba(79, 95, 114, 1)',
        fontWeight: '400',
        fontSize: 15
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
    btnView: {
        padding: 18,
        backgroundColor: '#2A7BBB',
        marginTop: 5,
        borderRadius: 8,


    },
    btnTxt: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 1)',
        fontWeight: '700',
        fontSize: 16
    },
    outer: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    toastView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(240, 68, 56, 1)',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        position: 'absolute',
        top: 35,
        alignSelf: 'center'

    },
    txtStyle: {
        marginLeft: 15,
        fontWeight: '500',
        fontSize: 13,
        color: 'white'
    },

})