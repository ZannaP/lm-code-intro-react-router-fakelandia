import {Routes, Route} from 'react-router-dom';
const Router: React.FC = () => (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/misdemeanours' element={<Misdemeanours/>}/>
        <Route path='/confess-to-us' element={<ConfessToUs/>}/>
    </Routes>
);
export default Router;