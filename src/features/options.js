import React, { Component } from 'react';

export default class Options extends Component {

    render() {
        return ( 
            this.props.features[this.props.part].map((item, index) => {
              const selectedClass = item.name === this.props.selected[this.props.part].name ? 'feature__selected' : '';
              const featureClass = 'feature__option ' + selectedClass;
              return <li key={index} className="feature__item">
                <div className={featureClass}
                  
                  onClick={e => this.props.handleClick(this.props.part, item)}>
                    { item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(item.cost) })
                </div>
              </li>
            }) 
        )
    }
}