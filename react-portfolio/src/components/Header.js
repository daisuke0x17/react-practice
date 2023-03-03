import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h3>Daisuke23</h3>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link to="/">ホーム</Link>
                    </li>
                    <li>
                        <Link to="/blog">ブログ</Link>
                    </li>
                    <li>
                        <a href="#">問い合わせ</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
