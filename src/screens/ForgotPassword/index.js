import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Icons } from "../../assets";
import styles from '../ForgotPassword/style'
import InputContainer from "../../components/TextInput";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import CustomModal from "../../components/Modal";

export default class ForgotPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            showToast: false,
            isModalVisible: false,
        }
    }

    handleSend = () => {
        if (this.state.email === 'a@gmail.com') {

            this.setState({ isModalVisible: true })
        }
        else {
            this.setState({ showToast: !this.state.showToast })
        }
    }

    closeModal = () => {
        this.props.navigation.navigate('reset')
        this.setState({ isModalVisible: false })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowView} onPress={() => {
                    this.props.navigation.navigate('login');
                }}>
                    <Image source={Icons.arrow} style={styles.img} />
                </TouchableOpacity>
                <Text style={styles.txt1}>Forgot Password</Text>
                <Text style={styles.txt2}>Reset your password with just a few clicks</Text>

                <View style={styles.inputCont}>
                    <InputContainer
                        placeholder='Email Address'
                        value={this.state.email}
                        keyboardType="email-address"
                        onChangeText={email => this.setState({ email })}
                        style1={styles.input}
                        source1={Icons.mail}
                        style2={styles.leftIcon}
                        Animation={true}
                        Type='Email'
                    />
                </View>
                <View style={styles.outer}>
                    <Button
                        disabled={!this.state.email}
                        style1={styles.btnView}
                        style2={styles.btnTxt}
                        btnName='Send Link'
                        onPress={this.handleSend}
                    />
                </View>

                <CustomModal Heading='Link Sent !' visibility={this.state.isModalVisible} text='The link to reset your password has been sent on your email address' buttonText='Go to Reset Password' onPress={this.closeModal}
                    onClose={this.closeModal} image={Icons.forgotP} />
                {this.state.showToast ?
                    <Toast
                        source={Icons.warn}
                        toastTxt='Email not found . Contact Admin'
                        toastView={styles.toastView}
                        imgStyle={styles.imgStyle}
                        txtStyle={styles.txtStyle}
                    /> : null}

            </View>
        );
    }
}