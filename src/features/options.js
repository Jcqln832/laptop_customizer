import React, { Component } from 'react';
import  ListItem from './listitem';

export default class Options extends Component {

    render() {
        return ( 
            this.props.features[this.props.part].map((item, index) => {
              const selectedClass = item.name === this.props.selected[this.props.part].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <ListItem 
                item = {item}
                index = {index} 
                selectedClass = {selectedClass}
                featureClass = {featureClass} 
                handleClick = {this.props.handleClick}
                part = {this.props.part}
              />
            }) 
        )
    }
}