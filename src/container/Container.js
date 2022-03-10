import React from 'react'
import Cards2 from '../components/Cards2'
import Cardss from '../components/Cardss'
import FirstContainer from '../components/FirstContainer'
import  Footer  from '../components/Footer'
import Header from '../components/Header'
import SecondContainer from '../components/SecondContainer'
import SignIn from '../components/SignIn'

const Container = () => {
  return (
    <div>
      <Header/>
      <FirstContainer />
      <Cardss/>
      <SecondContainer/>
      <Cards2/>
      <SignIn/>
      <Footer/>

    </div>
  )
}

export default Container