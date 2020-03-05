import React, {useEffect, useState} from 'react';
import Header from './components/Header'
import SearchArea from "./components/SearchArea";
import PopularServices from "./components/PopularServices";
import HowItWorks from "./components/HowItWorks";
import Comments from "./components/Comments";
import Footer from "./components/Footer";
import UserPopup from "./components/UserPopup";
import Alert from "./components/Alert";

function App() {

    const [userPopupVisible, setUserPopupVisible] = useState(false);

    function handleUserButtonClick() {
        setUserPopupVisible(true);
    }

    function handleUserPopupClose() {
        setUserPopupVisible(false);
    }

    return (
        <div>
            <Header onUserButtonClick={handleUserButtonClick}/>
            <SearchArea/>
            <PopularServices/>
            <HowItWorks/>
            <Comments/>
            <Footer/>
            <UserPopup visible={userPopupVisible} onClose={handleUserPopupClose}/>
        </div>
    );
}

export default App;
