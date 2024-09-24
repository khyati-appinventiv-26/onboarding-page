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
    countryPick: {
        flexDirection: 'row',

    },
    inputCont: {
        marginTop: 20,
        paddingBottom: 4,
        width: '100%',
        marginRight: 20
    },
    input: {
        width: '80%',
        paddingVertical: 20,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingLeft: 35,
        position: 'relative',
        paddingLeft: 49
    },
    picker: {
        padding: 20,

    },
    countryView: {
        marginTop: 20,
        backgroundColor: '#fff',
        height: 60,
        width: 60,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 15

    },
    code: {
        position: 'absolute',
        top: 22,
        left: 5,
        fontWeight: '500'
    },
    toastView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(240, 68, 56, 1)',
        paddingVertical: 10,
        paddingHorizontal: 25,
        borderRadius: 8,
        position: 'absolute',
        top: 30,
        alignSelf: 'center',
        width: '100%',

    },
    txtStyle: {
        marginLeft: 15,
        fontWeight: '500',
        fontSize: 13,
        color: 'white'
    },

})