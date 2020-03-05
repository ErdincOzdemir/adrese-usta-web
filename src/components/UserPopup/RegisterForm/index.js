import React, {useState} from "react";

function RegisterForm() {

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [password, setPassword] = useState();

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handlePhoneNumberChange(e) {
        setPhoneNumber(e.target.value)
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }

    function handleRegisterClick() {
        register().then(r => {
            alert(r);
        }).catch(e => {
            alert(e);
        });
    }

    async function register() {
        return await fetch("http://localhost:8081/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phoneNumber: phoneNumber,
                password: password
            })
        });
    }

    return (
        <div className="accountform">
            <form className="loginform">
                <div className="accountformfield">
                    <label>İsim *</label>
                    <input type="text" required={true} onChange={handleFirstNameChange} />
                </div>
                <div className="accountformfield">
                    <label>Soyisim *</label>
                    <input type="text" required={true} onChange={handleLastNameChange} />
                </div>
                <div className="accountformfield">
                    <label>E-posta *</label>
                    <input type="text" required={true} onChange={handleEmailChange}/>
                </div>
                <div className="accountformfield">
                    <label>Telefon Numarası *</label>
                    <input type="text" required={true} onChange={handlePhoneNumberChange}/>
                </div>
                <div className="accountformfield">
                    <label>Parola *</label>
                    <input type="password" required={true} onChange={handlePasswordChange}/>
                </div>
                <button type={"button"} onClick={handleRegisterClick}>Üye Ol</button>
            </form>
        </div>
    );
}

export default RegisterForm;