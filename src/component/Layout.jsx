import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/layout.scss';

const Layout = () => {
    return (
        <header>
            <Link to='/personal'>Personal description</Link>
            <Link to='/personal/gustos'>My likes</Link>
        </header>
    );
}

export default Layout;