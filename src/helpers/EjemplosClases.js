import React from 'react';
import Componente from "../components/Componente";
import Propiedades from "../components/Propiedades";
import Estado from "../components/Estado";
import RenderizadoCondicional from "../components/RenderizadoCondicional";
import RenderizadoElementos from "../components/RenderizadoElementos";
import {EventosES6, EventosES7, MasSobreEventos} from "../components/EventosES6";
import DadComponent from "../components/ComunicacionComponentes";
import logo from "../logo.svg";

function EjemplosClases() {
    return (
        <>
            <section>
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </section>
            <Componente mdg={"hola soy un componente funcional expreasado desde una props"}/>
            <hr/>
            <Propiedades
                cadena={"Esto es una cadena de texto"}
                numero={19}
                booleando={true}
                arreglo={[1, 2, 3]}
                objeto={{
                    nombre: "Mau",
                    correo: "mau@gmail.com",
                }}
                funcion={(num) => num * num}
                elementoReact={<i>Esto es un elemento react</i>}
                componenteReact={<Componente mdg={"Soy un componente pasado como props"}/>}
            />
            <hr/>
            <Estado/>
            <hr/>
            <RenderizadoCondicional/>
            <hr/>
            <RenderizadoElementos/>
            <hr/>
            <EventosES6/>
            <hr/>
            <EventosES7/>
            <hr/>
            <MasSobreEventos/>
            <hr/>
            <DadComponent/>
            <hr/>
        </>
    );
}

export default EjemplosClases;