import {Home} from '../pages/home';
import {Misdemeanours} from '../pages/misdemeanours';
import {ConfessToUs} from '../pages/confess-to-us';
import {Page404} from '../pages/404page';
import MainLayout from "../layouts/main_layouts";
import {Routes, Route} from "react-router-dom";

const Router: React.FC = () => (
    <Routes>
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='/misdemeanours' element={<Misdemeanours/>}/>
            <Route path='/confess-to-us' element={<ConfessToUs/>}/>
            <Route path='*' element={<Page404/>}/>
        </Route>
    </Routes>
);
export default Router;