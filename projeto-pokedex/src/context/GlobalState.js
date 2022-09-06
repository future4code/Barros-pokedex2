import { useState } from "react";
import { Context } from "./Context";

export function GlobalState(props) {
    const [ pokedex, setPokedex ] = useState([])

    const globalData = {
        pokedex,setPokedex
    }

    return (
        <Context.Provider value={globalData}>
        {props.children}
        </Context.Provider>
    )
}