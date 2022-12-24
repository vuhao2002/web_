import './admin.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Statistical from './pages/statistical/Statistical';
import Accounts from './pages/account/Account';
import Products from './pages/product/Product';
import ProductLine from './pages/productLine/ProductLine';

export default function Admin() {
    return (
        <div className="container">
            <Router>
                <Routes>
                    <Route path="/" element={<Statistical />} />
                    <Route path="/accountManagement" element={<Accounts />} />
                    <Route path="/product" element={<Products />} />
                    <Route path="/productLine" element={<ProductLine />} />
                </Routes>
            </Router>
        </div>
    );
}
