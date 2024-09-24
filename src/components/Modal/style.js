import { StyleSheet } from "react-native"

export default StyleSheet.create({
    
    overlay: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        paddingLeft:50,
        paddingRight:50,
        paddingTop:15,
        paddingBottom:10,
        borderRadius: 8,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop:300,
       
      },
      modalText: {
        fontSize: 13,
        marginBottom: 20,
        textAlign: 'center',
        color: "#60707D",
        fontWeight:'400',
      },
      modalTextLocked: {
        marginVertical: 20,
        textAlign: 'center',
        fontWeight: "700",
        fontSize: 20,
        color:'#0B1721'
      },
      lockStyle: {
        width: 50,
        height: 50,
        
      },
      btnView: {
        paddingVertical: 15,
        paddingHorizontal: 25,
        backgroundColor: 'rgba(42, 123, 187, 1)',
        borderRadius: 8
      },
      btnTxt: {
        color: 'white',
        textAlign: 'center'
      }
      
})