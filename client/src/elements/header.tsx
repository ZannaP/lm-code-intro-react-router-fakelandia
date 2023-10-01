import Nav from "./nav";
import './header.scss';

export const Header = () => <header>
    <div className={"container mx-auto py-6 flex gap-8"}>
        <div className={"basis-1/5"}>Fakelandia Justice Department</div>
        <div><Nav/></div>
    </div>
</header>