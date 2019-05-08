import React, { Component } from 'react';
import  Summary from './summary';

export default class SummaryContainer extends Component {
    render() {

        return ( 
            <section className="main__summary">
                <h3>NEW GREENLEAF 2018</h3>
                <Summary features = {this.props.features} selected = {this.props.selected}/>
            </section>

        )
    }
}