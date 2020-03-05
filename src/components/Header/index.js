import React from 'react';
import LoginButton from "./LoginButton";

function Header({onUserButtonClick}) {

    return (
        <div>
            <div className="responsiveheader">
                <div className="rheader">
                    <span><img src="images/ricon.png" alt=""/></span>
                    <div className="logo">
                        <a href="#" title=""><img src="http://placehold.it/164x37" alt=""/></a>
                    </div>
                    <div className="extras">
                        <LoginButton onClick={onUserButtonClick} />
                    </div>
                </div>
                <div className="rnaver">
                    <span className="closeresmenu"><i>x</i>Kapat</span>
                    <div className="logo"><a href="#" title=""><img src="http://placehold.it/175x40" alt=""/></a></div>
                    <ul>
                        <li className="menu-item">
                            <a href="#" title="">Ana Sayfa</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" title="">Hakkımızda</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" title="">AdreseUsta nasıl çalışır?</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" title="">Neden AdreseUsta?</a>
                        </li>
                    </ul>
                </div>
            </div>

            <header className="sticktop">
                <div className="logo">
                    <a href="#" title=""><img src="http://placehold.it/164x37" alt=""/></a>
                </div>
                <div className="extras">
                    <LoginButton onClick={onUserButtonClick} />
                </div>
                <nav>
                    <ul>
                        <li className="menu-item">
                            <a href="#" title="">Ana Sayfa</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" title="">Hakkımızda</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" title="">AdreseUsta nasıl çalışır?</a>
                        </li>
                        <li className="menu-item">
                            <a href="#" title="">Neden AdreseUsta?</a>
                        </li>
                    </ul>
                </nav>
            </header>

        </div>
    );
}

export default Header;