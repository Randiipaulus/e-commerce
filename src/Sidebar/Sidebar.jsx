import React from 'react'
import './Sidebar.css'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import logo from '../logo/logo.png'

const Sidebar = ({handleChange}) => {

  return <>

  <section className="sidebar">
    <div className="logo-container">
      <h1><img src={logo} className='logo-side'/></h1>
    </div>

  <Category handleChange={handleChange}/>
  <Price handleChange={handleChange}/>
  <Colors handleChange={handleChange}/>

  </section>
  </>
}

export default Sidebar