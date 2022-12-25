import './admin.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Statistical from './pages/statistical/Statistical';
import Accounts from './pages/account/Account';
import Products from './pages/product/Product';
import ProductLine from './pages/productLine/ProductLine';
import AdminContextProvider from '../../contexts/AdminContext';
import Auth from '../Auth';

export default function Admin() {
    return (
        <div className="container">
            <AdminContextProvider>
                <Router>
                    <Routes>
                        <Route path="/login" element={<Auth authRoute="login" />} />
                        <Route path="/register" element={<Auth authRoute="register" />} />
                        <Route path="/" element={<Statistical />} />
                        <Route path="/account" element={<Accounts />} />
                        <Route path="/product" element={<Products />} />
                        <Route path="/productLine" element={<ProductLine />} />
                    </Routes>
                </Router>
            </AdminContextProvider>
        </div>
    );
}
