import './App.css';
import React from "react";
import Estilos from "./components/Estilos";
import ComponentesEstilizados from "./components/ComponentesEstilizados";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    {/*<EjemplosClases/>*/}
                    <Estilos/>
                    <hr/>
                    <ComponentesEstilizados/>
                </section>
            </header>
        </div>
    );
}

export default App;
