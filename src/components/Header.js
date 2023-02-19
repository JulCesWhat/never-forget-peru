import { useNavigate } from 'react-router-dom';

import './Header.scss';

export function Header() {
    const navigate = useNavigate();

    const reroute = (path) => {
        navigate(path);
    }

    return (
        <header>
            <h3 onClick={() => reroute('/')}>Nunca Olvidaremos</h3>
            <nav className="container text-center">
                <span onClick={() => reroute('/contact')}>Contacto</span>
            </nav>
        </header>
    );
}
