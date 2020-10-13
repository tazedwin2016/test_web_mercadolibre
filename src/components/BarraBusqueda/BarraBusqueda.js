import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Row, InputGroup, FormControl }  from  'react-bootstrap' ;
import './style.scss';
import { Link, useHistory } from "react-router-dom";
import globalContext from "../../stateGlobal/globalContext";

const BarraBusqueda = () => {
    const { findItems } = useContext(globalContext);
    const [inputSearch, setSearch] = useState('');
    const history = useHistory();
    const urlParams = new URLSearchParams(window.location.search);
    const paramSearch = urlParams.get('search');

    useEffect(()=>{
        if(paramSearch!=undefined){
            if(paramSearch.trim()!==''){
                setSearch(paramSearch)
            }
        }
    },[])
    
    const find = () => {
        if(inputSearch.trim()!==''){
            history.push(`/items?search=${inputSearch}`);
            findItems(inputSearch)
        }
    }
    const handleChange = e => setSearch(e.target.value)

    return (
        <div className="barrabusqueda">
            <Container className="pt-2">
                <Row>
                    <Col md={1}>
                        <Link to="/" onClick={()=>setSearch('')}>
                            <img alt="LOGO_ML" src={require('../../assets/Assets/Logo_ML.png')} />
                        </Link>
                    </Col>
                    <Col md={11}>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Nunca dejes de buscar"
                                onChange={handleChange}
                                onKeyPress={(event)=> event.key  === 'Enter' ? find() : null}
                                value={inputSearch}
                            />
                            <InputGroup.Append onClick={find} className="btnFind">
                                <InputGroup.Text id="basic-addon2">
                                    <img alt="ic_serach" src={require('../../assets/Assets/ic_Search.png')}/>
                                </InputGroup.Text>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BarraBusqueda;