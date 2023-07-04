import React, { useEffect, useState } from 'react'
import Main from '../components/Main/Main'
import ProductManager from '../components/ProductManager/ProductManager'
import Header from '../components/Header/Header'
import './App.scss'

function App () {
  return (
    <>
      <Header/>
      <Main>
        <ProductManager />
      </Main>
    </>
  )
}

export default App
