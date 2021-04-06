import React from 'react'
import '../App.css'

class FooterComp extends React.Component{
  render(){
    return(
      <div style={{display:'flex',justifyContent: 'space-evenly',width: '100%',alignItems: 'center'}}>
        <h1 style={{fontSize:'16px',color:'white'}}>Privacy Policy</h1>
        <h1 style={{fontSize:'16px',color:'white'}}>©CDSTech-2021</h1>
      </div>
    )
  }
}

export default FooterComp