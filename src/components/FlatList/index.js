import React from "react";
import { FlatList } from "react-native";

export default class ListComp extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return(
            <FlatList
                data={this.props.data}
                renderItem={this.props.renderItem}
                keyExtractor={this.props.keyExtractor}
                horizontal={this.props.horizontal}
                style={this.props.style}
                showsHorizontalScrollIndicator ={false}

            />
        );
    }
}