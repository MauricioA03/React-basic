import React, {useEffect, useState} from 'react';
import {useFetch} from "../hooks/useFetch";

function HooksPersonalizados() {
    const [pokemons, setPokemons] = useState([]);
    let url = "https://pokeapi.co/api/v2/pokemon/";
    // url = "https://jsonplaceholder.typicode.com/users";
    let {data, isPending, error} = useFetch(url);

    useEffect(() => {
        const getPokemons = async (json) => {
            json?.results.forEach(async (el) => {
                let res = await fetch(el.url),
                    json = await res.json();

                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                };

                setPokemons((pokemons) => [...pokemons, pokemon]);
            });
        }
        getPokemons(data);
    }, [data]);


    return (
        <div>
            <h2>Hooks personalizados</h2>
            <h3>{JSON.stringify(isPending)}</h3>
            <h3>
                <mark>{JSON.stringify(error)}</mark>
            </h3>
            <div>
                {pokemons.length === 0 ? (<h3>Cargando...</h3>
                ) : (
                    pokemons.map((el) =>
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>)
                )}
            </div>
        </div>
    );
}

export default HooksPersonalizados;

function Pokemon({avatar, name}) {
    return (
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}