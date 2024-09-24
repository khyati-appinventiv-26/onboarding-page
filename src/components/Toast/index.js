import React from "react";
import { View, Text , Image } from "react-native";
import styles from '../Toast/style'

export default class Toast extends React.Component{
    constructor(props){
        super(props);
    }
    render() {
        return(
            <View style={this.props.toastView}>
                <Image source={this.props.source} style={this.props.imgStyle}/>
                <Text style={this.props.txtStyle}>
                    {this.props.toastTxt}
                </Text>
            </View>
        );
    }
}