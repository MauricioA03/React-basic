import './App.css';
import React from "react";
import ScrollHooks from "./components/Hooks/ScrollHooks";
import AjaxApis from "./components/AjaxApis";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <section>
                    {/*<EjemplosClases/>*/}
                    <AjaxApis/>
                    <hr/>
                    <ScrollHooks/>
                </section>
            </header>
        </div>
    );
}

export default App;
