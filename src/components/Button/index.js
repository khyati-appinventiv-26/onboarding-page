import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <TouchableOpacity onPress={() => this.props.onPress()} style={[this.props.style1, {
                opacity: this.props.disabled ? 0.2 : 1
            }]} disabled={this.props.disabled}>
                <Text style={this.props.style2}>{this.props.btnName}</Text>
            </TouchableOpacity>
        );
    }
}