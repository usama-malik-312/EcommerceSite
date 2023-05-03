import React from 'react'
import DenseAppBar from './TopBar'
import HomeCarousel from './LandingPage'
import MultipleCardsCarousel from './CardsCarousel'
export const Navbar = () => {
  return (
    <>
    <DenseAppBar/>
    {/* <div    style={{backgroundColor:"red", height:"200px"}}> */}
      <HomeCarousel />
     <MultipleCardsCarousel />
    {/* </div>l */}
    </>
  )
}
