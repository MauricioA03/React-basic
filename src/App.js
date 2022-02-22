import './App.css';
import React from "react";
import HooksPersonalizados from "./components/HooksPersonalizados";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    {/*<EjemplosClases/>*/}
                    <HooksPersonalizados/>
                </section>
            </header>
        </div>
    );
}

export default App;
