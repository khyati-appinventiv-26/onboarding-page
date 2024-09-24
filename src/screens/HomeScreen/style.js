import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  TopNav: {
    backgroundColor: '#2a7bbb',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  rightNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
  },
  welcText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '300',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
  iconContainer: {
    backgroundColor: '#3e88c2',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  iconstyle: {
    height: 25,
    width: 25,
  },
  bodyContainer: {
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: '#e7edf3',
    flex: 1,
  },
  frequentlyContner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  notification: {
    paddingBottom: 20,
  },
  heading: {
    fontSize: 12,
    fontWeight: '600',
    paddingBottom: 10,
  },
  activitiesContainer: {
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
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
  modalContainer: {
    // borderWidth:1,
    // flex: .7,
    // justifyContent: 'flex-end',
    // backgroundColor:'red'
    marginTop:'auto'
  },
  modalContent: {
    // height: '80%',
    backgroundColor: '#E6EDF3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 40,
  },
  secure: {
    fontWeight: "600",
    fontSize: 23,
    marginTop: 20,
  },
  securetext: {
    fontSize: 14,
    fontWeight: '300',
    marginTop: 10,
    color: "grey",
  },
  securetext1: {
    fontSize: 17,
    color: "grey",
  },
  modalimage: {

    flexDirection: "row",
    

  },
  modalimagecontainer: {

    borderWidth: 1
  },
  textlink: {
    fontWeight: "600",
    fontSize: 14,
    paddingTop: 15,
    width: '80%'
  },
  modalphonecontainer: {
    alignItems:'center',
    height: 150,
  },
  image: {
    width: 100,
    height: 150,

  },
  image1: {

    width: 80,
    height: 80,

  }
})
