import {NavLink, useLocation} from "react-router-dom";

import("./nav.scss");

const Nav: React.FC = () => {
    const location = useLocation();

    const isNavLinkActive = (menu: string): boolean => {
        return location.pathname === menu;
    };

    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to='/' className={isNavLinkActive('/') ? 'active' : ''}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/misdemeanours' className={isNavLinkActive('/misdemeanours') ? 'active' : ''}>
                            Misdemeanours
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/confess-to-us' className={isNavLinkActive('/confess-to-us') ? 'active' : ''}>
                            Confess To Us
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/contacts' className={isNavLinkActive('/contacts') ? 'active' : ''}>
                            Contacts
                        </NavLink>
                    </li>

            </ul>
        </nav>
</>
    );
};
export default Nav;