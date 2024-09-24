import React from "react";
import { View, Text, Alert, Image } from "react-native";
import { Icons, Images } from "../../assets";
import InputContainer from "../../components/TextInput";
import Button from "../../components/Button";
import Toast from "../../components/Toast";
import CustomModal from "../../components/Modal";
import styles from '../ResetPassword/style';

export default class ResetPass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            cnfPassword: '',
            showToast: false,
            isModalVisible: false,
            showPass: false,
            showConPass: false,
            passwordValidations: {
                length: false,
                uppercase: false,
                lowercase: false,
                number: false,
                specialChar: false,
                match: false,
            },
            isPasswordFocused: false,
            isRst: false,
        };
    }

    handlePasswordChange = (password) => {
        this.setState({ password }, () => {
            this.validatePassword(password, this.state.cnfPassword);
        });
    };

    handleCnfPasswordChange = (cnfPassword) => {
        this.setState({ cnfPassword }, () => {
            this.validatePassword(this.state.password, cnfPassword);
        });
    };

    validatePassword = (password, cnfPassword) => {
        const length = password.length >= 8;
        const uppercase = /[A-Z]/.test(password);
        const lowercase = /[a-z]/.test(password);
        const number = /\d/.test(password);
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const match = password === cnfPassword;

        this.setState({
            passwordValidations: {
                length,
                uppercase,
                lowercase,
                number,
                specialChar,
                match,
            },
            // Show toast only if passwords do not match
        });
    };

    handleSend = () => {
        const { password, cnfPassword, passwordValidations } = this.state;


        if (!passwordValidations.length || !passwordValidations.uppercase ||
            !passwordValidations.lowercase || !passwordValidations.number ||
            !passwordValidations.specialChar) {
            Alert.alert("Please ensure all password requirements are met.");
            return;
        }


        if (password !== cnfPassword) {
            this.setState({ showToast: true });
            setTimeout(() => { this.setState({ showToast: false }) }, 5000)
            return;
        }
        this.setState({ isModalVisible: true, showToast: false });

        this.setState({ isRes: true })
    };

    closeModal = () => {
        this.props.navigation.navigate('login');
        this.setState({ isModalVisible: false });
    };

    toggleEye1 = () => {
        this.setState({ showPass: !this.state.showPass });
    };

    toggleEye2 = () => {
        this.setState({ showConPass: !this.state.showConPass });
    };

    render() {
        const { password, cnfPassword, passwordValidations, showPass, showConPass, showToast } = this.state;

        return (
            <View style={styles.container}>
                {/* Render Toast at the top if showToast is true */}
                {showToast && (
                    <Toast
                        source={Icons.warn}
                        toastTxt='Your Password does not match'
                        toastView={styles.toastView}
                        imgStyle={styles.imgStyle}
                        txtStyle={styles.txtStyle}
                    />
                )}

                <Image source={Images.Color} style={styles.img} />
                <Text style={styles.txt1}>Reset Password</Text>
                <Text style={styles.txt2}>Enter in your new password.</Text>

                <View style={styles.inputCont}>
                    <InputContainer
                        placeholder='Password'
                        value={password}
                        onChangeText={this.handlePasswordChange}
                        style1={styles.input}
                        source1={Icons.lock}
                        source2={showPass ? Icons.hide : Icons.eye}
                        style2={styles.leftIcon}
                        style3={styles.rightIcon}
                        Animation={true}
                        Type='resetPassword'
                        secureTextEntry={!showPass}
                        onPress={this.toggleEye1}
                        showToast={this.state.showToast}
                    />
                </View>

                {this.state.isPasswordFocused && (
                    <View style={styles.validationContainer}>
                        <View style={styles.outerView}>
                            <Image source={passwordValidations.length ? Icons.tick : Icons.cross} /><Text style={passwordValidations.length ? styles.valid : styles.invalid}>At least 8 characters</Text>
                        </View>
                        <View style={styles.outerView}>
                            <Image source={passwordValidations.uppercase ? Icons.tick : Icons.cross} /><Text style={passwordValidations.uppercase ? styles.valid : styles.invalid}>At least 1 uppercase letter</Text>

                        </View>
                        <View style={styles.outerView}>
                            <Image source={passwordValidations.lowercase ? Icons.tick : Icons.cross} /><Text style={passwordValidations.lowercase ? styles.valid : styles.invalid}>At least 1 lowercase letter</Text>

                        </View>
                        <View style={styles.outerView}>
                            <Image source={passwordValidations.number ? Icons.tick : Icons.cross} /><Text style={passwordValidations.number ? styles.valid : styles.invalid}>At least 1 number</Text>
                        </View >
                        <View style={styles.outerView}>
                            <Image source={passwordValidations.specialChar ? Icons.tick : Icons.cross} /><Text style={passwordValidations.specialChar ? styles.valid : styles.invalid}>At least 1 special character</Text>
                        </View>
                    </View>
                )}

                <View style={styles.inputCont}>
                    <InputContainer
                        placeholder='Confirm Password'
                        value={cnfPassword}
                        onChangeText={this.handleCnfPasswordChange}
                        style1={styles.input}
                        source1={Icons.lock}
                        source2={showConPass ? Icons.hide : Icons.eye}
                        style2={styles.leftIcon}
                        style3={styles.rightIcon}
                        Animation={true}
                        Type='confPassword'
                        secureTextEntry={!showConPass}
                        onPress={this.toggleEye2}
                        showToast={this.state.showToast}
                    />
                </View>

                <View style={styles.outer}>
                    <Button
                        disabled={!(this.state.password && this.state.cnfPassword)}
                        style1={styles.btnView}
                        style2={styles.btnTxt}
                        btnName='Send Link'
                        onPress={this.handleSend}
                        rstpass={this.state.isRst}
                    />
                </View>

                <CustomModal
                    Heading='Password Updated!'
                    visibility={this.state.isModalVisible}
                    text='Your new password has been updated'
                    buttonText='Back to login'
                    onPress={this.closeModal}
                    onClose={this.closeModal}
                    image={Icons.key}
                />
            </View>
        );
    }

}
