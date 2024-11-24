import {Outlet} from 'react-router-dom'     //? import this for Layout
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Layout() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}

export default Layout