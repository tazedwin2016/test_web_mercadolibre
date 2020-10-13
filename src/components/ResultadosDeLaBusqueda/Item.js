import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './style.scss';
import NumberFormat from 'react-number-format';
import iconFreeShipping from "../../assets/Assets/ic_shipping.png";
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    return (
        <div >
            <Row className="item">
                <Link to={`items/${item.id}`} className="link">
                    <img  alt={item.title}className="imgItem" src={item.picture}  />
                </Link>
                <Col md={7} className="infoItem align-self-center">
                    <h5 className="priceItem">
                        <NumberFormat value={item.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        {
                            item.free_shipping ? (
                                <img className="icoFree_shipping" alt="envio_gratis" src={iconFreeShipping} />
                            ):
                            null
                        }
                    </h5> 
                    <Link to={`items/${item.id}`} className="link">
                        <h5 className="titleItem">{item.title}</h5> 
                    </Link>
                </Col>
                <Col md={2} className="align-self-center">
                    <h5 className="cityItem">{item.city}</h5> 
                </Col>
            </Row>
            <hr className="divider"/>
        </div>
    );
};


export default Item;