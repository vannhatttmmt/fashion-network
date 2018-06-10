import SubMenu from '../components/home/submenu';
import MainMenu from '../components/home/mainmenu'

import React from 'react';
import ReactDOM from 'react-dom';
import Slide from "../components/home/slide";
import HotProduct from "../components/home/hotproduct";
import HotShirt from "../components/home/hotshirt";
import HotTrouser from "../components/home/hottrouser";
import HotShoe from "../components/home/hotshoe";
import HotAccessory from "../components/home/hotaccessory";
import Footer from '../components/home/footer'

class HomePageApp extends React.Component {
    render() {
        return (
            <div>
                <SubMenu />
                <MainMenu />
                <Slide vm = {vm}/>
                <HotProduct vm = {vm}/>
                <HotShirt vm = {vm}/>
                <HotTrouser vm = {vm}/>
                <HotShoe vm = {vm}/>
                <HotAccessory vm = {vm}/>
                <Footer/>
            </div>

        );
    }
}

ReactDOM.render(<HomePageApp />,
    document.querySelector('#content-home')
);