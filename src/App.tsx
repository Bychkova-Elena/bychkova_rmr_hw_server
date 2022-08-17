import routes from './infrastructure/routes/routes';
import React from 'react'
// import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './ui-library/normalize.css';
import Header from './features/header/components';
import Footer from './features/footer/components';

// export const App = hot(_App)
export function App(): JSX.Element | null {

    return (
            <Router>
                    <Header></Header>
                <Routes>
                    <Route
                        path={routes.login.path}
                        element={<routes.login.element/>}
                    />
                    <Route
                        path={routes.kitty.path}
                        element={<routes.kitty.element/>}
                    />
                    <Route path="/" element={<Navigate to={routes.login.path} />} />
                        </Routes>
                <Footer></Footer>
            </Router>
    )
}
