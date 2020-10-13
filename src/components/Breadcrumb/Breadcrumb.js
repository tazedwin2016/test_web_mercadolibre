import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import globalContext from '../../stateGlobal/globalContext';
import './style.scss';
const Breadcrumb = () => {
    //Cargarmos el globalContex
    const { categories } = useContext(globalContext);
    //Si catories es nulo, no se renderiza el componente
    if(categories === null) return null;
    return (
        <Container>
            <div className="breadcrumb">
                <span>{categories.join(' > ')}</span>
            </div>
        </Container>
    );
};


export default Breadcrumb;