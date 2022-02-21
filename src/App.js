import './App.css';
import React from "react";
import AjaxHooks from "./components/Hooks/AjaxHooks";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    {/*<EjemplosClases/>*/}
                    <AjaxHooks/>
                </section>
            </header>
        </div>
    );
}

export default App;
