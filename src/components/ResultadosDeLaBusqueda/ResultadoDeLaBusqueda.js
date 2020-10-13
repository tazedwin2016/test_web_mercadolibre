import React, { useContext, useEffect } from 'react';
import { Container }  from  'react-bootstrap' ;
import globalContext from "../../stateGlobal/globalContext";
import Item from "./Item";
import './style.scss';
  
const ResultadoDeLaBusqueda = () => {
    //Cargarmos el globalContex
    const { items, findItems } = useContext(globalContext);

    //Obtemos el parametro de busca en la URL
    const urlParams = new URLSearchParams(window.location.search);
    const paramSearch = urlParams.get('search');

    useEffect(()=>{
        //Validamos que exista un termino de busqueda para luego ejecutar la funcion findItem del globalState
        if (items.length===0) {
            if(paramSearch!==undefined){
                if(paramSearch.trim()!==''){
                    findItems(paramSearch);
                }
            }
        }
    },[]);

    //Si el array de items está vacio, no se renderiza el componente
    if(items.length===0) return null;

    return (
        <div className="resultadoDeLabusqueda">
            <Container>
                <div className="card">
                    {
                        //Iteramos los items del resultado de la busqueda
                        items.items.map((item,index) => (
                            <Item key={item.id} item={item} />
                        ))
                    }
                </div>
            </Container>
        </div>
    );
};

export default ResultadoDeLaBusqueda;