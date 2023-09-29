import Nav from "./nav";
import './header.scss';

export const Header = () => <header>
    <div className={"my-container flex gap-8"}>
        <div className={"basis-1/5"}>Fakelandia Justice Department</div>
        <div><Nav/></div>
    </div>

</header>