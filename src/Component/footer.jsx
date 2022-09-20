import React, {Component} from 'react';
import logo from "../img/logo.png";
import {Col, Container, Row} from "reactstrap";
import './style/footer.scss'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="brand">
                                <img src={logo} alt=""/>
                                <p className="brand-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolor error officia quia veritatis. Nulla! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi cum doloremque est eum magnam nulla rerum sequi totam! Adipisci, nemo. consequuntur deserunt distinctio eum harum vitae.</p>

                            </div>
                        </Col>
                        <Col md="6">
                            <ul className="products">
                                <h4 className="theme">Product</h4>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                            <ul className="products">
                                <h4 className="theme">Product</h4>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                            <ul className="products">
                                <h4 className="theme">Product</h4>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">My Account</a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Footer;