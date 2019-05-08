import React, { Component } from 'react';
import  FeaturesList from './featureslist';

export default class FeaturesContainer extends Component {

  render() {
    return ( 
      <section className="main__form">
        <h3>TECH SPECS AND CUSTOMIZATIONS</h3> 
        {Object.keys(this.props.features).map(key => {
        return <div className="feature" key={key}>
          <div className="feature__name">{key}</div>
          <ul className="feature__list">
            <FeaturesList features = {this.props.features} 
                    selected = {this.props.selected} 
                    handleClick = {(feature,newValue) => this.props.handleClick(feature,newValue)}
                    part = {key} 
            />
          </ul>
        </div>
      })}
    </section>
    )
  }
}