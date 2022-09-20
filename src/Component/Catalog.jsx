import React, {Component} from 'react';
import Trend from '../Component/JSON/catalog.json';
import './style/catalog.scss'
import {Card, CardBody, CardHeader, Col, Container, Row} from "reactstrap";

class Catalog extends Component {
    render() {
        return (
            <div className="trending">
                <div className="pagetitle">
                    <p>Explore Awesome Products</p>
                    <h4>Recommended for you</h4>
                </div>
                <Container className="trandingCards">
                    <Row>
                        {Trend.map((post)=>{
                            return(
                                <Col md="3">
                                    <Card>
                                        <CardHeader>
                                            <img src={post.img} alt=""/>
                                        </CardHeader>
                                        <CardBody>
                                            <div className="infoTitle">
                                                <p className="name">{post.name}</p>
                                                <span className="price">{post.price}</span>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Catalog;