import { Outlet } from "react-router-dom";
import Header from "../header/header";
import Footer from "../footer/footer";

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