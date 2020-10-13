import React, { useContext, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import globalContext from "../../stateGlobal/globalContext";
import './style.scss';
import NumberFormat from 'react-number-format';

const DetalleDelProducto = () => {
    //Cargarmos el globalContex
    const { item, findItem } = useContext(globalContext);
    // Obtenemos el id de los parametros de la url
    const {id} = useParams();

    //Si el item es nulo, ejecutamos el accion finItem del globalState
    useEffect(()=>{
        if(item==null){
            findItem(id)
        }
    },[item,id])
    

    //Si el item es nulo, no se renderiza el componente
    if(item==null) return null;
    return (
        <div className="item">
            <Container>
                <div className="card">
                    <Row>
                        <Col md={7}>
                            <img alt={item.item.title} src={item.item.picture} className="imgDetalle"/> 
                        </Col>
                        <Col md={4} className="ml-4">
                            <h2 className="textVendidos">
                                {
                                    item.item.condition === 'new' ? 
                                    (
                                        'Nuevo ' 
                                    )
                                    :
                                    ( 
                                        'Usado '
                                    )
                                }
                                -
                                {
                                    item.item.sold_quantity > 0 ? 
                                    (
                                    ' ' + item.item.sold_quantity + ' '
                                    )
                                    :
                                    null
                                }
                                Vendidos
                            </h2>
                            <h2 className="textTitle">
                                {item.item.title}
                            </h2>
                            <h2 className="textPrice">
                                <NumberFormat value={item.item.price.amount} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                            </h2>
                            <button className="btn btnComprar">Comprar</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7} className="containerDescription">
                            <h3 className="titleDescripcionProducto">Descripción del producto</h3>
                            <p className="textDescripcionProducto">
                                {item.item.description}
                            </p>
                        </Col>
                    </Row>
                </div>
            </Container>           
        </div>
    );
};


export default DetalleDelProducto;