import React from 'react'
import "./Logo.css"
import { useNavigate } from 'react-router-dom';

export const Logo = () => {
  const navigate = useNavigate()

  return (
    <div onClick={() => {
        navigate('/');
        console.log("Happening2");
        }}>
        <div className='Logo'></div>
        <p className='LogoText text'>Expenso</p>
        </div>
  )
}
