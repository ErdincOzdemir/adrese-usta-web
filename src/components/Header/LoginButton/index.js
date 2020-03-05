import React, {useEffect, useState} from "react";
import Cookies from "universal-cookie";

function LoginButton({onClick}) {
    const cookies = new Cookies();

    if (cookies.get('user') == null) {
        return (
            <a href="#" title="" className="btnaccount" id="accountButton" onClick={onClick}><i className="flaticon-avatar" /> Üye Girişi</a>
        );
    } else {
        return (
            <a href="#" title=""><i className="flaticon-avatar" /> {cookies.get('user').firstName} {cookies.get('user').lastName}</a>
        );
    }
}

export default LoginButton;