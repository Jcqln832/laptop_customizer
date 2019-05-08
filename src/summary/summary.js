import React, { Component } from 'react';
import  SummaryItem from './summaryitem';

export default class Summary extends Component {

    render() {
        const total = Object.keys(this.props.selected)
          .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0); 

        return ( 
            <>
            <SummaryItem selected = {this.props.selected}/>

            <div className="summary__total">
            <div className="summary__total__label">Your Price: </div>
            <div className="summary__total__value">
                { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(total) }
            </div>
            </div>
            </>
        )
    }
}