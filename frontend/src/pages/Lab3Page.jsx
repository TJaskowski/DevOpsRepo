import React from 'react'
import FlexContainer from '../components/FlexContainer'
import PersonProfile from '../components/PersonProfile'

function Lab3Page() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/generate-data?count=100') // adres backendu
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={PersonProfile} data={data}></FlexContainer>
    </div>
  )
}

export default Lab3Page
