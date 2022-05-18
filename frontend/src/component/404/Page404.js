import React from 'react'
import { Link } from 'react-router-dom'
import './Page404.css'

export const Page404 = () => {
  return (
      <>
        <div className="page-404">
            <div className="header">
                <h1>Oh no!! You are lost. &#128561;</h1>
                <center><Link to="/"><button>Back to home</button></Link></center>
            </div>
        </div>
      </>
  )
}