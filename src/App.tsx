import routes from './infrastructure/routes/routes';
import React, { createContext, useContext, useState } from 'react'
// import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import './ui-library/normalize.css';

type KittyContextType = {
  isAuth: boolean;
  isLoading: boolean;
};

const KittyContext = createContext<KittyContextType>({
  isAuth: false,
  isLoading: false
});

const Provider = KittyContext.Provider;

export const useKittyContext = () => useContext(KittyContext);

// export const App = hot(_App)
export function App(): JSX.Element | null {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    return (
        <Provider value={{ isAuth, isLoading }}>
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
        </Provider>
    )
}
