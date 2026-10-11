import { useState } from 'react';
import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Categories from './components/categories/Categories';
import ProductList from './components/productlist/ProductList';
import ProductModal from './components/productmodal/ProductModal';
import PartnerBanners from './components/partnerbanners/PartnerBanners';
import Brands from './components/brands/Brands';
import Newsletter from './components/newsletter/Newsletter';
import Footer from './components/footer/Footer';
import type { Product } from './types/Product';

function App() {
  const [selectedProduct, setSelectedProduct] =
    useState<Product | null>(null);

  return (
    <>
      <Header />
      <Navbar />

      <main>
        <Banner />
        <Categories />
        <ProductList onSelectProduct={setSelectedProduct} sectionId="produtos" showTabs />
        <PartnerBanners />
        <Brands />
        <ProductList onSelectProduct={setSelectedProduct} sectionId="produtos-relacionados" showTabs={false} showViewAll />
      </main>

      <Newsletter />
      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;