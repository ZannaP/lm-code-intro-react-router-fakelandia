import { Outlet } from "react-router-dom";
import {Footer} from "../elements/footer.tsx";
import {Header} from "../elements/header.tsx"

const MainLayout: React.FC = () => (
    <>
        <Header />
        <main className="p-6" style={{ flex: "1" }}>
            <Outlet />
        </main>
        <Footer />
    </>
);
export default MainLayout;