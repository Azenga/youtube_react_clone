import React from 'react'

const headerStyle = {
  padding: '8px 0',
}

export default function About() {
  return (
    <React.Fragment>
      <div style={{padding: '0 4rem', }}>
        <h1 style={headerStyle}>About</h1>
        <p>This is my clone from Traversy Media youtube channel React crash course, I used it to learn React js Framework</p>
      </div>
    </React.Fragment>
  )
}
