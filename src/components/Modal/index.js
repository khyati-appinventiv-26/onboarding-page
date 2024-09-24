import React from 'react';
import { View, Text, Modal, Image } from 'react-native';
import Button from '../Button/index';
import styles from '../Modal/style'

export default class CustomModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.main}>
                <Modal
                    transparent={true}
                    visible={this.props.visibility}
                    animationType="fade"
                    onRequestClose={this.props.onClose}>
                    <View style={styles.overlay}>
                    <View style={styles.modalContent}>
                        <View style={styles.imageContainer}>
                        <Image style={styles.lockStyle} source={this.props.image} />
                        </View>
                        <Text style={styles.modalTextLocked}>{this.props.Heading}</Text>
                        <Text style={styles.modalText}>{this.props.text}</Text>
                        <Button  btnName= {this.props.buttonText} onPress={this.props.onClose} style2={styles.btnTxt} style1 ={styles.btnView}/>
                    </View>
                    </View>
 
                </Modal>
            </View>
        );
    }
}

