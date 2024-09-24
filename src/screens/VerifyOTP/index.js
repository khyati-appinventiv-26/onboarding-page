import React from "react";
import { View, Text, Alert, TouchableOpacity,Image} from "react-native";
import OTPTextInput from 'react-native-otp-textinput';
import styles from '../VerifyOTP/style';
import Button from "../../components/Button";
import { Icons } from "../../assets";
import CustomModal from "../../components/Modal";


export default class VerifyOTP extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          otp: '',
          isModalVisible: false,
          showToast: false,
          errorMessage: false,
          wrongAttempts: 1,
          isModalVisible2: false,
        };
      }

      handleChange = (input) => {
        this.setState({ otp: input });
        console.log(this.state.otp);
        
      };
    
      handleSubmit = () => {
        const { otp } = this.state;
        if(otp === '123456'){
            this.setState({isModalVisible: true});
            return;
        }
        else{

            this.setState({wrongAttempts : this.state.wrongAttempts+1});
            this.setState({errorMessage: true})
            if(this.state.wrongAttempts>=3){
                this.setState({isModalVisible2 : true})
            }
        }
        
      };

      closeModal = () => {
        this.setState({ isModalVisible: false });
        this.props.navigation.navigate('login')
    }

    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowView} onPress={() => {
                    this.props.navigation.navigate('fa');
                }}>
                    <Image source={Icons.arrow} style={styles.img} />
                </TouchableOpacity>
                 <Text style={styles.txt1}>Verify Account Access</Text>
                <Text style={styles.txt2}>Enter the verification code sent to <Text style={styles.innertxt}>+1-788-895-5435.</Text></Text>

                <OTPTextInput
                    handleTextChange={this.handleChange}
                    tintColor="#d3d3d3"
                    offTintColor="#d3d3d3"
                    textInputStyle={this.state.wrongAttempts> 1 ? [styles.otpInput, {borderRightColor: 'red'}]:styles.otpInput}
                    inputCount={6} // Number of OTP fields
                    containerStyle={this.state.wrongAttempts> 1 ? [styles.otpView , {borderWidth: 1, borderColor: 'red'}] : styles.otpView }
                />
                {this.state.errorMessage? <View style={styles.viewError}>
                    <Image source={Icons.warn} style={{marginRight: 10}}/>
                    <Text>The code you entered is incorrect, you have  {4-this.state.wrongAttempts} attempts remaining.</Text>
                </View>
                :<Text></Text>}
                <Text style={styles.resend}>Resend</Text>

                <View style={styles.outer}>
                    <Button
                        disabled={!(this.state.otp)}
                        style1={styles.btnView}
                        style2={styles.btnTxt}
                        btnName='Verify Code'
                        onPress={this.handleSubmit}
                
                    />
                </View>    
                <CustomModal Heading={this.state.isModalVisible2 ? 'Too many failed Attempts' : 'Your account has been verified successfully.' } visibility={this.state.isModalVisible || this.state.isModalVisible2} text={this.state.isModalVisible2 ? 'Your account has been locked, please try again in one hour' : 'Account Verified!' }buttonText='Back To Login'
                            onClose={this.closeModal} image={this.state.isModalVisible2? Icons.Toomany: Icons.accver} />
                {/* {showToast && (
                    <Toast
                        source={Icons.warn}
                        toastTxt='Enter your number'
                        toastView={styles.toastView}
                        imgStyle={styles.imgStyle}
                        txtStyle={styles.txtStyle}
                    />
                )} */}
                
            </View>
        )
    }
}