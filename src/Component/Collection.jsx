import React, {Component} from 'react';
import './style/collection.scss'
import tv2 from "../img/tv2.png"
import tv4 from "../img/tv4.png"
import tv5 from "../img/tv5.png"
import {Card, CardBody, CardFooter, Col, Container, Row} from "reactstrap";

class Collection extends Component {
    render() {
        return (
            <div className="collaction">
                    <Container>
                        <Row>
                            <Col md="12" className="pagetitle text-center">
                                <p>Explore Awesome Products</p>
                                <h4>Recommended for you</h4>
                            </Col>
                            <Col lg="6" md="12">
                                <Row>
                                    <Col lg="6" md="6">
                                        <Card>
                                            <CardBody>
                                                <img src={tv2} alt=""/>
                                            </CardBody>
                                            <CardFooter>
                                                <p>Artel TV (81 см)</p>
                                                <span>$699</span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col lg="6" md="6">
                                        <Card>
                                            <CardBody>
                                                <img src={tv2} alt=""/>
                                            </CardBody>
                                            <CardFooter>
                                                <p>Artel TV (81 см)</p>
                                                <span>$699</span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col lg="6" md="6">
                                        <Card>
                                            <CardBody>
                                                <img src={tv4} alt=""/>
                                            </CardBody>
                                            <CardFooter>
                                                <p>Artel TV (81 см)</p>
                                                <span>$699</span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                    <Col lg="6" md="6">
                                        <Card>
                                            <CardBody>
                                                <img src={tv4} alt=""/>
                                            </CardBody>
                                            <CardFooter>
                                                <p>Artel TV (81 см)</p>
                                                <span>$699</span>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="cardcol" lg="6" md="12">
                                <Card>
                                    <CardBody>
                                        <div className="productsPrice">
                                            <span>SALE -50%</span>
                                            <span>$299</span>
                                        </div>
                                        <img src={tv5} alt=""/>
                                    </CardBody>
                                    <CardFooter>
                                        <h4>Artel TV (81 см)</h4>
                                        <p>$699</p>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col md="12" className="buttonArea">
                                <a href="#" className="exploreBtn">Explore Other Products</a>
                            </Col>
                        </Row>
                    </Container>
            </div>
        );
    }
}

export default Collection;