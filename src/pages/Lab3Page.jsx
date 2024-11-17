import React from 'react'
import { Card, CardText } from 'react-bootstrap'
import FlexContainer from '../components/FlexContainer'
import { data } from '../data/module-data'
import PersonProfile from '../components/PersonProfile'
function Lab3Page() {

  return (
    <div>
      <h1>Laboratorium 3</h1>
      <FlexContainer element={PersonProfile} data={data}></FlexContainer>
    </div>
  )
}

export default Lab3Page
