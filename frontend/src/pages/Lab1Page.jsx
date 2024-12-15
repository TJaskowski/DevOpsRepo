import PersonProfile from "../components/PersonProfile";
import { useEffect, useState } from "react";

function Lab1Page() {
    const [data, setData] = useState([]);
    useEffect(() => {
      fetch('http://localhost:4000/generate-data?count=100') // adres backendu
        .then(response => response.json())
        .then(fetchedData => setData(fetchedData))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
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
