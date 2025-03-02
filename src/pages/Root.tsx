import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar.tsx';
import Footer from '../components/Footer.tsx';
import ScrollBar from '../components/scrollBar.tsx';

import { ScrollBarProvider } from '../utils/contexts/scrollBarContext.tsx';

export default function Root() {

    return(
        <ScrollBarProvider>
            <Navbar />
            <ScrollBar />
            <Outlet />
            <Footer />
        </ScrollBarProvider>
    );
}