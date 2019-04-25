import React, { Component } from 'react';
import  Options from './options';

export default class FeaturesContainer extends Component {

    render() {
        return ( 
            Object.keys(this.props.features)
          .map(key => {

            return <div className="feature" key={key}>
              <div className="feature__name">{key}</div>
              <ul className="feature__list">
                <Options features = {this.props.features} 
                        selected = {this.props.selected} 
                        handleClick = {(feature,newValue) => this.props.handleClick(feature,newValue)}
                        part = {key} />
              </ul>
            </div>
          })   
        )
    }
}