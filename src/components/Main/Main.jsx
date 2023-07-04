import React from 'react'
import './Main.scss'

function Main ({ children }) {
  return (
    <main>
      <article className="container">
        {children}
      </article>
    </main>
  )
}

export default Main
