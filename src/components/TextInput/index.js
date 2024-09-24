import React from "react";
import { TextInput, View, Image, Animated, Text, TouchableOpacity } from "react-native";
import styles from '../TextInput/style';
import { Icons } from "../../assets";

export default class InputContainer extends React.Component {


    constructor(props) {
        super(props);
        this.placeholderTop = new Animated.Value(this.props.value ? 5 : 20);
        this.state = {
            errorMessage: '',
            borderColor: '#fff',
            isPasswordFocused: false,
            cnfPassword: '',
            pass: '',
            macthPass: false,
            passwordValidations: {
                length: false,
                uppercase: false,
                lowercase: false,
                number: false,
                specialChar: false,
                match: false,

            },
        };
        // this.i = !this.state.passwordValidations.length || !this.state.passwordValidations.uppercase || !this.state.passwordValidations.lowercase || !this.state.passwordValidations.specialChar || !this.state.passwordValidations.number
        // console.log("fromn this.i",this.i);

    }

    // componentDidMount() {
    //     if (this.props.isRst) {
    //         this.checkPassword()
    //     }
    // }
    componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.placeholderTop.setValue(this.props.value ? 5 : 20);
            this.validateInput(this.props.value);
        }
    }

    handleFocus = () => {
        this.placeholderTop.setValue(5);
        this.setState({ isPasswordFocused: true });
    };

    handleBlur = () => {
        if (!this.props.value) {
            this.placeholderTop.setValue(20);
        }
        this.validateInput(this.props.value);
        this.setState({ isPasswordFocused: false });
    };

    validateInput(value) {
        let errorMessage = '';
        let borderColor = '#fff';

        if (this.props.Type === 'Email' || this.props.Type === 'ForgotEmail') {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(value)) {
                errorMessage = 'Invalid email address';
                borderColor = 'red';
            }
        }

        if (this.props.Type === 'Password') {
            if (value.length < 8) {
                errorMessage = 'Password must be 8 characters long';
                borderColor = 'red';
            }
        }

        if (this.props.Type == 'resetPassword' || this.props.Type === 'confPassword') {
            if (!this.state.passwordValidations.length || !this.state.passwordValidations.uppercase || !this.state.passwordValidations.lowercase || !this.state.passwordValidations.specialChar || !this.state.passwordValidations.number) {
                borderColor = 'red';
            }
            else {
                borderColor = '#fff'
            }
        }

        

        this.setState({ errorMessage, borderColor });
        // console.log(borderColor)

        
    }

    validatePassword = (password) => {
        const length = password.length >= 8;
        const uppercase = /[A-Z]/.test(password);

        const lowercase = /[a-z]/.test(password);
        const number = /\d/.test(password);
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        this.setState(prevState => ({
            passwordValidations: {
                length,
                uppercase,
                lowercase,
                number,
                specialChar,
                match: prevState.cnfPassword === password,
            }
        }));
    };

    handleChangeText = (text) => {

        this.props.onChangeText(text);

        if (this.props.Type === 'resetPassword') {
            this.validatePassword(text)


            this.setState({ pass: text })

        } else if (this.props.Type === 'confPassword') {
            this.validatePassword(text)

            this.setState({ cnfPassword: text })
            

        }
        

    };



    // checkPassword = () => {
        

    //     if (this.props.isRst) {
    //         if (this.state.pass === this.state.cnfPassword) {
    //             this.setState({ macthPass: true })
    //             this.setState({ borderColor: "#fff" })
    //         } else {
    //             this.setState({ borderColor: "red" })
    //         }
    //     }

        
    // }

    render() {
        const { passwordValidations, isPasswordFocused } = this.state;

        return (
            <View>
                <TextInput
                    placeholder={this.props.Animation ? null : this.props.placeholder}
                    value={this.props.value}
                    keyboardType={this.props.keyboardType}
                    onChangeText={this.handleChangeText}
                    style={this.props.showToast?[this.props.style1, { borderColor:'red', borderWidth: 1 }]:[this.props.style1, { borderColor: this.state.borderColor, borderWidth: 1 }] }
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    secureTextEntry={this.props.secureTextEntry}
                    onSubmitEditing={this.onSubmitEditing}
                    ref={this.props.forwardRef}
                />
                {this.props.source1 &&
                    <Image source={this.props.source1} style={this.state.errorMessage || this.state.borderColor === 'red' || this.props.showToast ? [this.props.style2, styles.imgLeft] : this.props.style2} />
                }
                <TouchableOpacity onPress={() => this.props.onPress()} style={styles.eyeView}>
                    <Image source={this.props.source2} style={this.props.style3} />
                </TouchableOpacity>

                {isPasswordFocused && this.props.Type === 'resetPassword' && (
                    <View style={styles.validationContainer}>
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
                    </View>
                )}



                <View style={styles.errorView}>
                    <Image source={this.state.errorMessage ? Icons.alert : null} style={styles.alertStyle} />
                    <Text style={styles.errorTxt}>{this.state.errorMessage || ' '}</Text>
                </View>

                {this.props.Animation && (
                    <Animated.Text
                        style={[
                            styles.placeholderStyle,
                            {
                                top: this.placeholderTop,
                                position: 'absolute',
                            },
                            this.state.errorMessage || this.state.borderColor === 'red' || this.props.showToast? { color: 'red' } : { color: '#60707D' }
                        ]}
                        pointerEvents="none"
                    >
                        {this.props.placeholder}
                    </Animated.Text>
                )}
            </View>
        );
    }
}
