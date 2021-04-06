import React from 'react'
import './App.css'

import HeaderComp from './Components/HeaderComp'
import FooterComp from './Components/FooterComp'
import BodyComp from './Components/BodyComp'

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="HeaderComp"><HeaderComp /></div>
        <div className="BodyComp"><BodyComp /></div>
        <div className="FooterComp"><FooterComp /></div>
      </div>
    )
  }
}

export default App