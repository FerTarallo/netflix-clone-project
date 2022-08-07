import { Link } from 'react-router-dom';
import { Button } from '../Button';

import logoImg from '../../assets/images/logoImg.svg';

import './style.scss';

export function Header() {
    return (
        <div className="header-container">
            <img src={logoImg} alt="Logo Netflix" />
            
            <section className="header-menu">
                <div>Series</div>
                <div>Movies</div>
                <div>My List</div>
            </section>

            <div className="auth-container">
                <Link to={``}>Sign In</Link>
                <Button
                    theme="red"
                    text="Sign Up"
                />
            </div>
        </div>
    );
}