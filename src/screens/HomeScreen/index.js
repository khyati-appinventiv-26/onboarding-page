import React, { Component } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { Icons } from '../../assets/index'
import Frequently from '../../components/Frequently'
import Notification from '../../components/Notification'
import Activities from '../../components/Activity'
import styles from '../HomeScreen/style'
import CustomeModal from '../../components/CustomeModal'
import Button from '../../components/Button'

export default class HomeScreen extends Component {
  //   handleLogout=async()=>{
  //     await AsyncStorage.setItem('isLogin','false')
  //     this.props.navigation.navigate('Login')
  //   }
  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: true
    }
  }
  handelNavigate = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  handleSend = () => {
    this.props.navigation.navigate('fa')
    this.setState({ isModalVisible: !this.state.isModalVisible })
  }
  toggleModal = () => {

    this.setState({ isModalVisible: !this.state.isModalVisible })
  }

  render() {
    const activityList = Array.from({ length: 10 }); // Create an array of 10 elements

    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.TopNav}>
          <View style={styles.leftNav}>
            <Text style={styles.welcText}>Welcome</Text>
            <Text style={styles.name}>Kelvin</Text>
          </View>
          <View style={styles.rightNav}>
            <View style={styles.iconContainer}>
              <Image style={styles.iconstyle} source={Icons.chat} />
            </View>
            <TouchableOpacity style={styles.iconContainer} onPress={this.handleLogout}>
              <Image style={styles.iconstyle} source={Icons.bell} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.notification}>
            <Notification onPress={this.handelNavigate} />
          </View>
          <Text style={styles.heading}>FREQUENTLY USED</Text>
          <View style={styles.frequentlyContner}>
            <Frequently title={'Calender'} />
            <Frequently title={'Customer'} />
            <Frequently title={'Messages'} />
          </View>
          <Text style={styles.heading}>ACTIVITIES</Text>
          <View style={styles.activitiesContainer}>
            {activityList.map((_, index) => (
              <Activities key={index} />
            ))}
          </View>
        </View>
        <CustomeModal
          needChild={true}
          visible={this.state.isModalVisible}
          transparent={true}
          animationType={'slide'}
          onBackdropPress={() => this.toggleModal()}
          onRequestClose={()=>this.toggleModal()}

        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <View style={styles.modalphonecontainer}>

                <Image source={Icons.ModalImage} style={styles.image} />
              </View>
              <Text style={styles.secure} onPress={this.props.onBackdropPress} >Secure your Account ?</Text>
              <Text style={styles.securetext}>Setup two-factor authentication to secure your account in just two steps.</Text>

              <View style={styles.modalimage}>
                <Image source={Icons.ModalCall} style={styles.image1} />
                <Text style={styles.textlink}>Link your account with your phone number</Text>
              </View>

              <View style={styles.modalimage}>

                <Image source={Icons.ModalOtp} style={styles.image1} />

                <Text style={styles.textlink}>Enter the one-time passcode</Text>
              </View>

              <View style={styles.modalimage}>

                <Image source={Icons.ModalSecure} style={styles.image1} />

                <Text style={styles.textlink}>Secure your account</Text>
              </View>


              <Button

                style1={styles.btnView}
                style2={styles.btnTxt}
                btnName='Get Started'
                onPress={this.handleSend}
                rstpass={this.state.isRst}
              />

            </View>
          </View>
        </CustomeModal>
      </ScrollView>
    )
  }
}