import { Outlet } from "react-router-dom";
import {Footer} from "../elements/footer.tsx";
import {Header} from "../elements/header.tsx"

const MainLayout: React.FC = () => (
    <>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
);
export default MainLayout;