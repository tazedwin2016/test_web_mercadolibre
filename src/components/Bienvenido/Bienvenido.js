import React, { useContext, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import globalContext from '../../stateGlobal/globalContext';
import "./style.scss";

const Bienvenido = () => {
    const { dispatch } = useContext(globalContext);
    useEffect(()=>{
        //Reseteamos el array de caterogias para que no se muestre el breadcrumb
        dispatch({
            type:'SET_CATEGORIES',
            payload: null
        })
    },[])
    return (
        <div>
            <Container className="containerLogo">
                <img alt="Mercado libre, Compra, Vende. Nunca dejes de buscar." className="imgLogo" src={require('../../assets/logo.png')} />
            </Container>
        </div>
    );
};

export default Bienvenido;