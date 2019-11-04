import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from './component/header';
import Carousel from './component/carousel';
import Card from './component/card';
import Footer from './component/footer';
import { getProducts } from './redux/actions/summaryActions';
import { simpleAction } from './redux/actions/simpleAction';


const initialState = {
};

class Summary extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount() {
        // const { actions } = this.props;
        // const { getProducts } = actions;
        // getProducts();
        this.props.simpleAction();
    }

    simpleAction = (event) => {
        this.props.simpleAction();

    }

    render() {
        const { posts, products, result } = this.props;
        const { } = this.state;

        let results = result || [];

        return (
            <div class="container">
                <Header />
                <Carousel />
                <div class="row">
                    <div class="col-sm-3">
                        {

                            results.map((item, idx) => (<Card
                                key={idx}
                                card_image={item.image}
                                card_title={item.name}
                                card_pice={item.price}
                            />))
                        }
                    </div>
                </div>
                <Footer />
                <button onClick={this.simpleAction}>Test redux action</button>
            </div>
        )
    }
}

Summary.propTypes = {
    // intl: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    products: state.simpleReducer.products,
    result: state.simpleReducer.result
})

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Summary);