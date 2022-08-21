import { routes } from './infrastructure/routes/routes';
import React, { createContext, SetStateAction, useContext, useMemo, useState } from 'react'
// import { hot } from 'react-hot-loader/root'
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import './ui-library/normalize.scss';
import { Footer } from './features/layout/footer/components';
import { QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient();

type UserContextType = {
    name: string,
    setName: React.Dispatch<SetStateAction<string>>
};

const UserContext = createContext<UserContextType>({
    name: "",
    setName: () => { }
});

export const useUserContext = () => useContext(UserContext);

// export const App = hot(_App)
export function App(): JSX.Element | null {
    const [name, setName] = useState("");
    
    const value = useMemo(
    () => ({ name, setName }), 
    [name]
  );

    return (
        <UserContext.Provider value={value}>
        <QueryClientProvider client={queryClient}>
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
                    <Route path="/" element={<Navigate to={routes.login.path} />} />
                        </Routes>
                <Footer></Footer>
            </Router>
            </QueryClientProvider>
            </UserContext.Provider>
    )
}
