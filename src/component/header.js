import React, { Component } from 'react';

const initialState = {
    cart: 0
};

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
      }

search = (evt) => {
    console.log(evt.target.value);
}

    render() {
        const { cart } = this.state;
        const { } = this.props;
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="#">Practice</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <input class="form-control mr-sm-2" type="search" onChange={this.search} placeholder="Search" />
                        <form class="form-inline my-2 my-lg-0">
                        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li class="nav-item active">
                               { (cart == 0)? <a class="nav-link" href="#">Cart</a>
                               :<a class="nav-link" href="#">Cart{cart}</a>
                               }
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Profile</a>
                            </li>
                        </ul>                        </form>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;
