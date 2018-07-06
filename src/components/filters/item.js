import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);

    }
    
    render() {
        debugger;
        const { image, label } = this.props;

        return (
            <div className='categoryItem'>
                <img className='categoryImage' alt={image} />
                <p className='categoryLabel'> {label}</p>
            </div> 
        )
    }
}

export default Item;
