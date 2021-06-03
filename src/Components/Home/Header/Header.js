import React from 'react';
import './Header.css';
import HeaderMain from '../HeaderMain/HeaderMain';
import TopHeader from '../TopHeader/TopHeader';

const Header = () => {
    return (
        <div className="header-container">
            <TopHeader />
            <HeaderMain />
        </div>
    );
};

export default Header;