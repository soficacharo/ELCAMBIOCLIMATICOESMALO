import { Outlet, Link } from "react-router-dom"


const Layout = () => {

    return (
        <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/dashboard">Dashboard</Link>
        </nav>
        <Outlet />
        </>
    )
}

export default Layout
