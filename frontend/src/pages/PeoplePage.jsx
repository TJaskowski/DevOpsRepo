import {useParams} from 'react-router-dom'

function PeoplePage() {
    const{id} = useParams(0);
    const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/generate-data?count=100') // adres backendu
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

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