import React from 'react'
import Button from '../../components/WelcomeWidget/Button'
import Container from '../../components/WelcomeWidget/Container'

export default () => {
  return (
    <div className="welcome-page" style={{display: "flex", alignItems: "center", justifyContent: "center", height: '100%', position: "relative"}}>
      <h1 style={{ position: "absolute", top: "20%" }}>Lead Generation Landing Page</h1>
      <Button />
      <Container />
    </div>
  )
}