import React, {useEffect, useContext, useReducer} from 'react';
import reducer from '../comfy-store/src/reducers/filter_reducer';


import {useProductsContext} from './src/context/products_context';
import {FILTER_PRODUCTS, SORT_PRODUCTS, LOAD_PRODUCTS, SET_GRIDVIEW} from './src/actions';

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sort: 'price-lowest',
  filters: {
    text: '',
    company: 'all',
  },
};

const FilterContext = React.createContext();

export const FilterProvider = ({children}) => {
  const {products} = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect( () => {
	dispatch({type:LOAD_PRODUCTS, payload: products})
  },[products]);

  useEffect( () => {
	dispatch({type: FILTER_PRODUCTS});
	dispatch({type: SORT_PRODUCTS})
  },[products, state.sort, state.filters]);

  const setGridView = () => {
	dispatch({type: SET_GRIDVIEW})
  }

  return(
	<FilterContext.Provider value={{...state, setGridView }}>
		{children}
	</FilterContext.Provider>
  )
};

export const useFilterContext = () => {
	return useContext(FilterContext)
}