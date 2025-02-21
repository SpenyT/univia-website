import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';

export default function Root() {

    return(
        <>
            <Navbar />
            <Outlet />
        </>
    );
}