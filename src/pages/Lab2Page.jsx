import React from 'react'
import { useParams } from 'react-router-dom'
import PersonProfile from '../components/PersonProfile';
import { data } from '../data/module-data';

function Lab2Page() {
    const {id} = useParams();
   

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
