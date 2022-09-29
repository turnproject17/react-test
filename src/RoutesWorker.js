import React from 'react';
import {Route,BrowserRouter,Routes} from 'react-router-dom';
import ProductScreen from './components/ProductScreen';



const RoutesWorker=()=>{
    return(
        <Route path="/products" component={ProductScreen} />
    );
}

export default RoutesWorker;
