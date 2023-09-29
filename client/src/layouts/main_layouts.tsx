import {Outlet} from "react-router-dom";
import {Footer} from "../elements/footer";
import {Header} from "../elements/header"

const MainLayout: React.FC = () => (
    <>
        <div className={"w-full"}>
            <Header/>
            <main>
                <Outlet/>
            </main>
        </div>
        <Footer/>
    </>
);
export default MainLayout;