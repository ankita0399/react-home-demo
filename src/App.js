import React from 'react';
import Headers from './components/Headers';
import Categories from './components/Categories';
import ProductsSection from './components/ProductsSection';
import Banner from './components/Banner';
import Trend from './components/Trend';
import Discount from './components/Discount';
import Services from './components/Services';
import Footer from './components/Footer';
import './style.css';

export default function App() {
  return (
    <>
      <Headers />
      <Categories />
      <ProductsSection />
      <Banner />
      <Trend />
      <Discount />
      <Services />
      <Footer />
    </>
  );
}
