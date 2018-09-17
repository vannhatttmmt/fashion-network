import SubMenu from '../components/home/submenu';
import MainMenu from '../components/home/mainmenu'

import ShoppingCart from '../components/home/shoppingcart'

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../components/home/footer'

class ShoppingCartPageApp extends React.Component {
    render() {
        return (
            <div>
                <SubMenu />
                <MainMenu />
                <ShoppingCart/>
                <Footer/>
            </div>

        );
    }
}

ReactDOM.render(<ShoppingCartPageApp />,
    document.querySelector('#content-cart')
);