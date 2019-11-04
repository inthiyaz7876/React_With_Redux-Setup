import React, { Component } from 'react';

import Summary  from '../summary';

const intialstate = {
    count : 0
}

class Card extends Component {
    constructor(props) {
        super(props)
         this.state = intialstate;
    }

    addCart = () => {
        const { count } = this.state;
        const a = "str";

        // this.setState({count : count+1});
        return (
        <Summary a={a} />
        );
    }

    componentWillReceiveProps () {
        const { a }= this.props;
        console.log(a);
    }
    render() {
        const { card_image, card_title, card_pice } = this.props;
        return (
            <div class="card">
                <img class="card-img-top" src={card_image} alt="Card image cap" />
                <div class="card-body">
                    <p class="card-text">{card_title}</p>
                    <p>{card_pice}></p>
                    <button class="btn btn-primary" onClick = {this.addCart}>Add to cart</button>
                </div>
            </div>
        )
    }
}

export default Card;