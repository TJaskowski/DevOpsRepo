import PersonProfile from "../components/PersonProfile";
import {data} from "../data/module-data";

function Lab1Page() {
    return ( 
        <>
        <h1>Laboratorium 1</h1>
        <div>
            {data.map((person) => (
            <div key={person.id}>
                <PersonProfile person={person}/>
                </div>))}
        </div>
        </>
     );
}

export default Lab1Page;
