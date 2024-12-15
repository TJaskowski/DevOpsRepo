import React from 'react'
import { useParams } from 'react-router-dom'
import PersonProfile from '../components/PersonProfile';
import { useEffect, useState } from "react";


function Lab2Page() {
  const {id} = useParams();
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('http://localhost:4000/generate-data?count=100') // adres backendu
      .then(response => response.json())
      .then(fetchedData => setData(fetchedData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  return (
    <>
      <h1>Laboratorium 2</h1>
    {!data.at(id - 1) ? (
        <h1> Nie znaleziono osoby o tym ID </h1>
    ) : (
        <>
        <div>
            <PersonProfile person={data.at(id-1)}></PersonProfile>
        </div>
        </>
    )}
    </>
  )
}

export default Lab2Page
