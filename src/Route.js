import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItems from './Components/ProductItems';
import Navbar from './Components/Navbar';

function RouteConfig() {
    return (
        <div>
            <Router>
                <Navbar />
                <switch>
                    <Routes>
                        <Route exact path="/" Component={Home} />
                        <Route path="/about" Component={About} />
                        <Route exact path="/product" Component={Product} />
                        <Route path="/product/:id" Component={ProductItems} />
                        <Route path="*" Component={() => <h2>404 Not Found</h2>} />
                    </Routes>
                </switch>
            </Router>
        </div>
    );
}

export default RouteConfig;
