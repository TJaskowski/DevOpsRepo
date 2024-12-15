import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import RatingBar from './RatingBar';

function PersonProfile( {person, dispatch} ) {

  return (
    <>
      <div key={person.id}>
        <h3>{person.name}</h3>
        <h4>UserId: {person.id}</h4>
        <p>
            <span>Birthdate: {person.birth}</span>
        </p>
        <p>
            <span>Eyes: {person.eyes}</span>
        </p>
        <p>
             <span>Rating: {person.rating}</span>
        </p>
        <div className="d-flex justify-content-center align-items-center p-1" >

        <Button className="btn btn-primary" onClick={() => {
          dispatch({
            type: 'edit',
            id: person.id
            });
          }}>Edit</Button>

        <Button className="btn btn-danger" onClick={() => {
          dispatch({
            type: 'delete',
            id: person.id
            });
        }}>Delete</Button>

        <Button className="btn btn-warning" onClick={() => {
          dispatch({
            type: 'rate',
            id: person.id
          });
        }}>Rate </Button>
        </div>

        <RatingBar rate={person.rating}/>
      </div>
    </>
  )
}

export default PersonProfile

  // const [rank, setRank] = useState(0);

  // const rateClick = () => {
  //   if(rank === 0){
  //     setRank(10);                 Lab3/3
  //   } else if(rank === 10){
  //     setRank(1);
  //   } else {
  //     setRank(rank + 1);
  //   }
  // }
  