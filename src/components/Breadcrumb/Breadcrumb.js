import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import globalContext from '../../stateGlobal/globalContext';
import './style.scss';
const Breadcrumb = () => {
    const { categories } = useContext(globalContext);
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