import { NavLink } from "react-router-dom";
import("./nav.scss");
const Nav:React.FC = () => (
    <nav>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/misdemeanours'>Misdemeanours</NavLink></li>
            <li><NavLink to='/confess-to-us'>Confess To Us</NavLink></li>
        </ul>
    </nav>
)
export default Nav;