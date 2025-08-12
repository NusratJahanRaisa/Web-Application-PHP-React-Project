import { Outlet } from 'react-router-dom';
import Navbar from '../Modules/Navbar';
import Footer from '../Modules/Footer';

const MainLayout = () => {
 
    return (
        <div>
        <div className='bg-black sticky z-30 top-0'>
            <Navbar></Navbar>
        </div>

        <Outlet></Outlet>
        
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;