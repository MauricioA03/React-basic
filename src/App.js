import './App.css';
import React from "react";
import ContadorHooks from "./components/Hooks/ContadorHooks";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    {/*<EjemplosClases/>*/}
                    <ContadorHooks title={"seguidores"}/>
                </section>
            </header>
        </div>
    );
}

export default App;
