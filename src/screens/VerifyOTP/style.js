import { StyleSheet } from "react-native"

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
        marginTop: 40,


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
    otpView: {
        backgroundColor: '#F8F9F9',
        height: 70,
        marginTop: 20,
        borderRadius: 8,
       
        alignItems: 'center'
    },
    otpInput: {
        fontSize: 14,
        borderRightWidth: 1,
        borderBottomWidth:0,
        textAlign: 'center',
        width: '12%',
       // paddingHorizontal : 5,

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

    innertxt: {
        color: '#000',
        fontWeight: 'bold'
    },
    resend: {
        alignSelf: 'flex-end',
        marginTop: 15,
        fontWeight: 'bold'
    },
    viewError: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    }

})