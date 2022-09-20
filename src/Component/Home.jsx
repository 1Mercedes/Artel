import React, {Component} from 'react';
import './style/home.scss'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

class Home extends Component {
    render() {
        return (
            <div className="home">
                    <div className="main container">
                        <h3>Возможность Работы При <br/>
                            Низком Напряжении</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Corporis, dolorum.</p>
                        <div className="buttons">
                            <a href="#" className="button1">Buy Now <ShoppingBasketIcon /></a>
                            <a href="#" className="button1">With $299 with trade</a>
                        </div>
                    </div>
            </div>
        );
    }
}

export default Home;