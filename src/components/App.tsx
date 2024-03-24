import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonApp from "../pages/PokemonApp";
import PokemonPage from "../pages/PokemonPage";
const App : React.FC = () => {


    return (
        <Router>
            <Routes>
                <Route path="/" Component={PokemonApp} />
                <Route path="/:id" Component={PokemonPage} />
            </Routes>
        </Router>
    );
}

export default App;
