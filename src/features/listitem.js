import React, { Component } from 'react';

export default class ListItem extends Component {

    render() {
        return ( 
           <li key={this.props.index} className="feature__item">
                <div className={this.props.featureClass}
                  onClick={e => this.props.handleClick(this.props.part, this.props.item)}>
                    { this.props.item.name }
                    ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                      .format(this.props.item.cost) })
                </div>
            </li>
        )
    }
}