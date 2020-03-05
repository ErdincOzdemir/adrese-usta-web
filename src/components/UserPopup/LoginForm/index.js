import React, {useState} from "react";
import Cookies from "universal-cookie";

function LoginForm() {

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const cookies = new Cookies();

    function handleUsernameChange(e) {
        setUserName(e.target.value);
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    async function handleLoginClick() {
        try {
            const response = await fetch("http://localhost:8081/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    phoneNumberEmail: userName,
                    password: password
                })
            });
            const json = await response.json();
            if (response.status === 200) {
                loginSuccess(json);
            } else {
                throw json.detailedErrorMessage;
            }
        } catch (error) {
            alert(error);
        }
    }

    function loginSuccess(user) {
        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        cookies.set('user', user, {expires: tomorrow});
        window.location.reload();
    }

    async function handleFormSubmit(e) {
        if (e) {
            e.preventDefault();
        }

        await handleLoginClick();
    }

    return (
        <div className="accountform" id="one">
            <form className="loginform" onSubmit={handleFormSubmit}>
                <div className="accountformfield">
                    <label>Telefon Numarası veya E-posta Adresi*</label>
                    <input type="text" name="username" required={true} onChange={handleUsernameChange} />
                </div>
                <div className="accountformfield">
                    <label>Parola</label>
                    <input type="password" name="password" required={true} onChange={handlePasswordChange} />
                </div>
                <button type={"submit"}>Giriş Yap</button>
            </form>
        </div>
    );
}

export default LoginForm;