import React, {Component} from 'react';
import data from "../helpers/data.json";

function ElementLista(props) {
    return (
        <li>
            <a href={props.el.web} target={"_blank"}> {props.el.name}  </a>
        </li>
    );
}

class RenderizadoElementos extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            seasons: ["Spring", "Summer", "Fall", "Winter"],
        };
    }

    render() {
        console.log(data)
        return (
            <div>
                <h2>Renderizado de elementos</h2>
                <h3>Station years</h3>
                <ol>
                    {
                        this.state.seasons.map((el) => (
                            <li key={el}>{el}</li>
                        ))}
                </ol>
                <h3>Frameworks Fronted JavaScripts </h3>
                <ul>
                    {
                        data.frameworks.map((el) => (
                            <ElementLista key={el.id} el={el}/>))
                    }
                </ul>
            </div>
        );
    }
}

export default RenderizadoElementos;