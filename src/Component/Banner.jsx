import React, {Component} from 'react';
import './style/banner.scss'

class Banner extends Component {
    render() {
        return (
            <div className="banner">
                <div className="content container">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, quas?</p>
                    <button>Start Shopping</button>
                </div>
            </div>
        );
    }
}

export default Banner;