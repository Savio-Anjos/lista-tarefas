import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Header from './components';
import Favoritos from './Pages/Favoritos';

function RoutesApp() {
    return (
        <BrowserRouter>
        <Header/>
           <Routes>
           <Route path='/' element={ <Home/> }/>
           <Route path='/favoritos' element={ <Favoritos/> } />
           </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;