import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import componentListReducer from './components/organisms/componentList/componentListSlice';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './components/Layout';
import Home from './pages/home/Home';
import { Contact } from './pages/contact/Contact';
import Cart from './components/molecules/cart/cart';
import ProductDetails from './components/molecules/product-details/product-details';
import Products from './pages/products/Products';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    componentList: componentListReducer,
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    }
  }
}); 


function App() {
  return (
   <Provider store={store}>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Layout/> }>
              <Route path="/productDetails/:productId" element={<ProductDetails/>}/>
              <Route path="cart" element={<Cart/>}/>
              <Route index element={<Home/>}/>
              <Route path="products" element={<Products/>}/>
              <Route path="contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
    </Provider>
  )
}

export default App;
