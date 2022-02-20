import logo from './logo.svg';
import './App.css';
import Componente from "./components/Componente";
import Propiedades from "./components/Propiedades";
import Estado from "./components/Estado";

function App() {
  return (
    <div className="App">
        <header className="App-header">
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
            <section>
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
            </section>
        </header>
    </div>
  );
}

export default App;
