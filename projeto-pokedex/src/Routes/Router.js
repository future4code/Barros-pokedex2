import React from "react";
import { Home } from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Stats } from "../Pages/Stats/Stats";
import { Pokedex } from "../Pages/Pokedex/Pokedex";


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element = { <Home /> } />

                <Route path = "stats/:pokeId" element = { <Stats /> } />

                <Route path = "pokedex" element = { <Pokedex /> } />

            </Routes>
        </BrowserRouter>
    )
}