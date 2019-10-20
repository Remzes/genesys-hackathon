import React from 'react'
import Widget from '../../components/ApplicationWidget/Button'
import Container from '../../components/ApplicationWidget/Container'

export default () => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center", height: '100%', position: "relative"}}>
      <h1 style={{ position: "absolute", top: "20%" }}>Application Page</h1>
      <Widget />
      <Container />
    </div>
  )
}