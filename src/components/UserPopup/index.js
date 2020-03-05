import React, {useEffect, useState} from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function UserPopup({visible, onClose}) {

    const [loginVisible, setLoginVisible] = useState(true);
    const [popupVisible, setPopupVisible] = useState(visible);

    useEffect(() => {
        setPopupVisible(visible);
    }, [visible]);


    function handleCloseClick() {
        setPopupVisible(false);
        onClose();
    }

    function handleLoginClick() {
        setLoginVisible(true);
    }

    function handleRegisterClick() {
        setLoginVisible(false);
    }

    return (popupVisible &&
        <div className="popupsec">
            <div className="popup">
                <div className="accounttabs">
                    <span className="closepopup" onClick={handleCloseClick}><i>+</i></span>
                    <ul className="ctabs group">
                        <li><a href="#" onClick={handleLoginClick} className={loginVisible ? "active" : null}>Giriş Yap</a></li>
                        <li><a href="#" onClick={handleRegisterClick} className={!loginVisible ? "active" : null}>Üye Ol</a></li>
                    </ul>
                    <div id="content">
                        { loginVisible && (<LoginForm/>) }
                        { !loginVisible && (<RegisterForm/>) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserPopup;