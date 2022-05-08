import React from 'react';
import Header from '../Header/Header';
import About from './About';
import ClientFeedback from './ClientFeedback';
import PopulerProduct from './PopulerProduct';
import ProductItem from './ProductItem';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ProductItem></ProductItem>
            <PopulerProduct></PopulerProduct>
            <ClientFeedback></ClientFeedback>
            <About></About>

            
        </div>
    );
};

export default Home;