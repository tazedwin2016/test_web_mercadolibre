import React, {useReducer} from 'react';
import globalContext from './globalContext';
import globalReducer from './globalReducer';
import { listItems, getItem } from "../service/service";

import {
  CHANGE_SEARCH,
  SET_ITEMS,
  SET_ITEM,
  SET_CATEGORIES
} from './types';

const GlobalState = (props) => {
  const initialState = {
    search: '',
    items: [],
    item: null,
    categories: null
  }
  const [state, dispatch] = useReducer(globalReducer, initialState);
  
  const findItems = async (search) => {
    dispatch({
      type: CHANGE_SEARCH,
      payload: search,
    });

    const res = await listItems(search);
    if (res.ok) {      
      dispatch({
        type: SET_ITEMS,
        payload: res.data,
      });
      dispatch({
        type: SET_CATEGORIES,
        payload: res.data.categories,
      });
      dispatch({
        type: SET_ITEM,
        payload: null,
      });
    }
  };
  
  const findItem = async (id) => {
    const res = await getItem(id);
    if (res.ok) {
      dispatch({
        type: SET_ITEM,
        payload: res.data,
      });
      dispatch({
        type: SET_CATEGORIES,
        payload: res.data.categories,
      });
      dispatch({
        type: SET_ITEMS,
        payload: [],
      });
    }
  };

  return (
    <globalContext.Provider
      value={{
        search: state.search,
        items: state.items,
        item: state.item,
        categories: state.categories,
        findItems,
        findItem,
        dispatch
      }}>
      {props.children}
    </globalContext.Provider>
  );
};
export default GlobalState;
