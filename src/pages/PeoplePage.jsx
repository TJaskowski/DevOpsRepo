import {useParams} from 'react-router-dom'
import {data} from '../data/module-data'

function PeoplePage() {
    const{id} = useParams(0);
    const person = data.find(p => p.id === Number(id));
    return ( 
        <>
        {person ? (
        <div>
        <h1> Szukane imie </h1>
        <p>Id : {person.id}</p>
        <p>Name: {person.name}</p>
        <p>Birth: {person.birth}</p>
        <p>Eyes: {person.eyes}</p>
        </div>) : (<span>Brak takiego imienia</span>)}
        </>
     );
}

export default PeoplePage;