import React, {Component} from 'react';
import './style/products.scss'
import Product from './JSON/products.json'

class Products extends Component {
    render() {
        return (
            <div className="container product">
                <div className="title">
                    <p>Explore Awesome Products</p>
                    <h4>Recommended for you</h4>
                </div>
                <div className="cards">
                        {Product.map((post)=>{
                           return(
                               <div className="productCard">
                                   <img src={post.img} alt=""/>
                                   <p>{post.name}</p>
                                   <div className="price">
                                       {post.price}
                                   </div>
                               </div>
                           )
                        })}
                </div>
                <div className="buttonOne">
                    <a href="#" className="exploreBtn">Explore Other Products</a>
                </div>
            </div>

        );
    }
}

export default Products;

