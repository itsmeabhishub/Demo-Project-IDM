
import { Navigate, Outlet, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { URLPaths } from "./urlPaths"
import Header from "../component/header/Header"
import Navbar from "../component/navbar/Navbar"
import Home from "../component/home/Home"
import BookPage from "../component/bookpage/BookPage"

export default function RoutingPilot() {
    const {MAIN_PATH, LOGIN_PATH, HOME_PATH, BOOK_PAGE} = URLPaths

    const redirectPath: any = HOME_PATH

    const PrivateRoute = () =>{
        const isAuthenticated = true
        return isAuthenticated ? <Outlet /> : <Navigate to={LOGIN_PATH} replace />
    }

    const renderContext = (
        <Router>
            <Header />
            <div className="main-container">
                {/* <Navbar /> */}
                <div className="route-container">
                    <Routes>
                        <Route 
                        path={MAIN_PATH}
                        element={<Navigate to={redirectPath} replace />} />
                        <Route element={<PrivateRoute/>} >
                        <Route  path={HOME_PATH} element={<Home />}/>
                        <Route path={BOOK_PAGE} element={<BookPage />} />
                        </Route>
                    </Routes>
                </div>

            </div>
        </Router>
    )
    return renderContext;
}