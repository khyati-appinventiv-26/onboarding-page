import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { Icons } from "../../assets";
import styles from '../FAScreen/style';
import CountryPicker from 'react-native-country-picker-modal';
import Button from "../../components/Button";
import InputContainer from "../../components/TextInput/index";
import Toast from "../../components/Toast";
import CustomModal from "../../components/Modal";

export default class FAScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countryCode: 'US',
            phoneNumber: '',
            country: {},
            isModalVisible: false,
            showToast: false
        };
    }

    onSelectCountry = (country) => {
        this.setState({
            countryCode: country.cca2,
            country: country,
        });
    };

    handleAddPhoneNumber = () => {
        const { phoneNumber, country } = this.state;

        if (!phoneNumber) {
            this.setState({ showToast: true });
            setTimeout(() => {this.setState({ showToast: false})}, 3000)
            return;
        }

        if (!country.callingCode) {
            Alert.alert('Please select a country.');
            return;
        }

        this.props.navigation.navigate('otp')
    };

    closeModal = () => {
        this.setState({ isModalVisible: false });
    }

    render() {
        const { countryCode, phoneNumber, country, showToast } = this.state;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.arrowView} onPress={() => {
                    this.props.navigation.navigate('home');
                }}>
                    <Image source={Icons.arrow} style={styles.img} />
                </TouchableOpacity>
                <Text style={styles.txt1}>Add Phone Number</Text>
                <Text style={styles.txt2}>To initiate the two-factor authentication, provide your phone number below.</Text>

                <View style={styles.countryPick}>
                    <View style={styles.countryView}>
                        <CountryPicker
                            countryCode={countryCode}
                            withFlag
                            withCallingCode
                            withFilter
                            onSelect={this.onSelectCountry}
                            style={styles.picker}
                        />
                    </View>
                    <View style={styles.inputCont}>
                        <InputContainer
                            style1={styles.input}
                            value={phoneNumber}
                            onChangeText={(text) => this.setState({ phoneNumber: text })}
                            keyboardType="phone-pad"
                            placeholder="Phone Number"
                            Type='phone'
                        />
                        <Text style={styles.code}>+ {country.callingCode || '1'}</Text>
                    </View>
                </View>
                <View style={styles.outer}>
                    <Button
                        disabled={!(phoneNumber)}
                        style1={styles.btnView}
                        style2={styles.btnTxt}
                        btnName='Send Code'
                        onPress={this.handleAddPhoneNumber}
                    />
                </View>
                <CustomModal Heading='Phone number added' visibility={this.state.isModalVisible} text='Code Sent successfully' buttonText='Okay'
                            onClose={this.closeModal} image={Icons.lock2} />
                {showToast && (
                    <Toast
                        source={Icons.warn}
                        toastTxt='Enter your number'
                        toastView={styles.toastView}
                        imgStyle={styles.imgStyle}
                        txtStyle={styles.txtStyle}
                    />
                )}
            </View>
        );
    }
}
