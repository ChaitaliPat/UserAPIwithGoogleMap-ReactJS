import React from 'react'
import '../App.css'
// import axios from 'axios';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%',
  };

class BodyComp extends React.Component{
    state={
        street:"",
        suite: "",
        city:"",
        zipcode:"",
        name:"",
        username:"",
        email:"",
        cname:"",
        lat:"",
        lng:""    
    }
    
    randomUserAPICall=()=>{
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res=>
            res.json()
        )
        .then(res=>{
            let rn=parseInt(Math.random(0,9)*10)
            this.setState({
                street:res[rn].address.street,
                suite:res[rn].address.suite,
                city:res[rn].address.city,
                zipcode:res[rn].address.zipcode,
                name:res[rn].name,
                username:res[rn].username,
                email:res[rn].email,
                cname:res[rn].company.name,
                lat:parseFloat(res[rn].address.geo.lat),
                lng:parseFloat(res[rn].address.geo.lng)
            })
        })
        .catch((e)=>{console.log("ERROR",e)})
    }
    componentDidMount(){
        
        this.randomUserAPICall()
        console.log("CDM called ********",this.state)
    }
    
  render(){
      console.log("Render Called ***",this.state)
    return(
      <div>
      <div style={{display:'flex',justifyContent: 'space-evenly',width: '100%',alignItems: 'center'}}>
        <div>
            <h2 style={{textAlign:'left'}}>BASIC DETAILS</h2>
            <div style={{textAlign:'left'}}>
            <h3>Name: {this.state.name}</h3>
            <h3>Username: {this.state.username}</h3>
            <h3>Email: {this.state.email}</h3>
            <h3>Company Name: {this.state.cname}</h3>
            </div>
        </div>
        <div>
            <h2 style={{textAlign:'left'}}>ADDRESS</h2>
            <div style={{textAlign:'left'}}>
            <h3>Suite: {this.state.suite}</h3>
            <h3>Street: {this.state.street}</h3>
            <h3>City: {this.state.city}</h3>
            <h3>Zipcode: {this.state.zipcode}</h3>
            </div>
        </div>  
      </div>
      {/* <div style={{backgroundColor:'wheat', }}>
          <h2>Test</h2>
      </div> */}
      <Map
          google={this.props.google}
          zoom={2}
          style={mapStyles}
          initialCenter={{ lat:this.state.lat, lng:this.state.lng}}
        >
        <Marker position={{lat:this.state.lat, lng:this.state.lng}} />
        </Map>
      </div>
      
    )
  }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLEMAPKEY
  })(BodyComp);