import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import PokemonApp from "./pokemonApp";
import PokemonPage from "./pokemonpage";
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
