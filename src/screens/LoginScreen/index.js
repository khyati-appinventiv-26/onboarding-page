import React from "react";
import { View, Text, Image, ImageBackground, KeyboardAvoidingView, Platform, ScrollView, Alert, TouchableOpacity, Dimensions, Keyboard } from "react-native";
import styles from '../LoginScreen/style';
import { Images, Icons } from "../../assets";
import ListComp from "../../components/FlatList";
import InputContainer from "../../components/TextInput";
import Button from "../../components/Button";
import CustomModal from "../../components/Modal";
import Toast from "../../components/Toast";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SCREEN_HEIGHT = Dimensions.get('screen').height
export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            showPass: true,
            isModalVisible: false,
            wrongAttempts: 0,
            showToast: false,
        }
        this.loginRef = React.createRef()
    }
    items = [
        {
            id: 1,
            icon: Icons.chart,
            txt1: 'Aesthetical ',
            txt2: 'Graphics'
        },
        {
            id: 2,
            icon: Icons.clock,
            txt1: 'Real time ',
            txt2: 'statistics'
        },
        {
            id: 3,
            icon: Icons.flask,
            txt1: 'Track equipment',
            txt2: 'usage'
        },
    ];

    toggleEye = () => {
        this.setState({ showPass: !this.state.showPass });
    }

    handleSubmit = async () => {
        if (this.loginRef.current) {
            
            this.loginRef?.current?.focus();
          }

        email = this.state.email
        password = this.state.password

        if (email == 'K@gmail.com' && password == '12345678') {

            // Alert.alert('LoggedIn')
            this.props.navigation.navigate('home')
            await AsyncStorage.setItem('isLoggedIn', 'true')
        }
        else {
            this.setState({ showToast: !this.state.showToast })
            setTimeout(() => { this.setState({ showToast: false }) }, 3000)
            if (this.state.wrongAttempts >= 3) {
                console.log('------------');

                this.setState({ isModalVisible: true })
            }
            else {
                console.log('////////');
                console.log(this.state.wrongAttempts)
                this.setState(prevState => ({
                    wrongAttempts: prevState.wrongAttempts + 1
                }));
            }
        }
    }
    closeModal = () => {
        this.setState({ isModalVisible: false });
    }
    renderItem = ({ item }) => (
        <View style={styles.flItems}>
            <Image source={item.icon} style={styles.flIcon} />
            <View>
                <Text style={styles.flTxt}>{item.txt1}</Text>
                <Text style={styles.flTxt}>{item.txt2}</Text>
            </View>
        </View>
    );
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                // keyboardVerticalOffset={SCREEN_HEIGHT * 0.28}
            >
                <ImageBackground source={Images.bgImg} style={styles.container}>
                    <View style={styles.topView}>
                        <Image source={Images.logo2} style={styles.gif} />
                        <View>
                            <Text style={styles.text1}>QUIVIO</Text>
                            <Text style={styles.text2}>Your Personal CarWash Assistant</Text>
                        </View>
                        <View style={styles.hr}></View>
                        <ListComp
                            data={this.items}
                            keyExtractor={(i) => i.id.toString()}
                            renderItem={this.renderItem}
                            horizontal={true}
                            style={styles.flView}
                        />
                    </View>
                    <View style={styles.bottomView}>
                        <Text style={styles.txt1}>Sign in</Text>
                        <Text style={styles.txt2}>with your valid credentials</Text>
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
                                forwardRef={this.loginRef}
                            />
                        </View>
                        <View style={styles.inputCont2}>
                            <InputContainer
                                placeholder='Password'
                                value={this.state.password}
                                keyboardType="default"
                                onChangeText={password => this.setState({ password })}
                                style1={styles.input}
                                source1={Icons.lock}
                                source2={this.state.showPass ? Icons.hide : Icons.eye}
                                style2={styles.leftIcon}
                                style3={styles.rightIcon}
                                Animation={true}
                                Type='Password'
                                secureTextEntry={this.state.showPass}
                                onPress={() => this.toggleEye()}
                            />
                        </View>

                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate('forgot');
                            this.props.navigation.reset({ index: 0, routes: [{ name: 'forgot' }] });
                        }}>
                            <Text style={styles.forgotTxt}>Forgot Password?</Text>
                        </TouchableOpacity>
                        <Button
                            disabled={!(this.state.email && this.state.password)}
                            style1={styles.btnView}
                            style2={styles.btnTxt}
                            btnName='Primary'
                            onPress={this.handleSubmit}
                        />
                        <CustomModal Heading='Account Locked' visibility={this.state.isModalVisible} text='Too many wrong attempts. Please try again later.' buttonText='Okay'
                            onClose={this.closeModal} image={Icons.lock2} />

                    </View>
                    {this.state.showToast ? <Toast
                        source={Icons.warn}
                        toastTxt='Invalid credentials. Please try again'
                        toastView={styles.toastView}
                        imgStyle={styles.imgStyle}
                        txtStyle={styles.txtStyle}
                    /> : null}

                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}
