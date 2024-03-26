import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonApp from "./PokemonApp";
import PokemonPage from "./PokemonPage";
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const App : React.FC = () => {

    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    <Route path="/" Component={PokemonApp} />
                    <Route path="/:id" Component={PokemonPage} />
                </Routes>
            </Router>
        </QueryClientProvider>
    );
}

export default App;
