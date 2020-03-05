import LoginForm from "../UserPopup/LoginForm";
import RegisterForm from "../UserPopup/RegisterForm";
import React from "react";

function Alert() {

    return (
        <div className="popupsec">
            <div className="popup">
                <div className="accounttabs">
                    <span className="closepopup"><i>+</i></span>
                    <div className="ctabs group">
                        Hata
                    </div>
                    <div id="content">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Alert;