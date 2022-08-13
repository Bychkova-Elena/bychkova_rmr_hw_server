import routes from './infrastructure/routes/routes';
import React from 'react'
// import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

// export const App = hot(_App)
export function App(): JSX.Element | null {
    return (
        <div>
            <Router>
                <Routes>
                    <Route
                        path={routes.login.path}
                        element={<routes.login.element/>}
                    />
                    <Route
                        path={routes.kitty.path}
                        element={<routes.kitty.element/>}
                    />
                    <Route path="/" element={<routes.login.element/>}/>
                </Routes>
            </Router>
        </div>
    )
}
