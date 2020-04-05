import React, { Component } from 'react';
import Header from './components/Header'
import Armory from './components/Armory';
import ForgeOfRivendell from './components/ForgeOfRivendell'
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      armoryWeapons:[],
    }
    this.forgeWeapon = this.forgeWeapon.bind(this)
    this.orcsFelled = this.orcsFelled.bind(this)
    this.equipWeapon = this.equipWeapon.bind(this)
  }

  componentDidMount(){
    axios.get('/api/weapons').then(res => {
      this.setState({
        armoryWeapons: res.data
      })
    })
  }

  forgeWeapon(weapon){
    axios.post('/api/weapons', weapon).then(res => {
      this.setState({
        armoryWeapons: res.data,
      })
    })
  }

  orcsFelled(id, newOrcsFelled){
    axios.put(`/api/weapons/${id}`, {newOrcsFelled}).then(res => {
      this.setState({
        armoryWeapons: res.data,
      })
    })
  }

  equipWeapon(id){
    axios.delete(`/api/weapons/${id}`).then(res => {
      this.setState({
        armoryWeapons: res.data,
      })
    })
  }

  render (){
  return (
    <div className="App">

      <Header />
      <ForgeOfRivendell
        forgeWeapon={this.forgeWeapon}
        />
      <Armory 
        armoryWeapons={this.state.armoryWeapons}
        orcsFelled={this.orcsFelled}
        equipWeapon={this.equipWeapon}
      />
    </div>
  );
  }
}

export default App;
