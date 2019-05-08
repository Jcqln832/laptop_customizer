import React, { Component } from 'react';
import  FeaturesItem from './featuresitem';

export default class FeaturesList extends Component {

    render() {
        return ( 
            this.props.features[this.props.part].map((item, index) => {
              const selectedClass = item.name === this.props.selected[this.props.part].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <FeaturesItem 
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