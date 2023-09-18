import {Routes, Route} from 'react-router-dom';
import { Home } from '../pages/home';
import { Misdemeanours } from '../pages/misdemeanours';
import { ConfessToUs } from '../pages/confess-to-us';
const Router: React.FC = () => (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/misdemeanours' element={<Misdemeanours/>}/>
        <Route path='/confess-to-us' element={<ConfessToUs/>}/>
    </Routes>
);
export default Router;