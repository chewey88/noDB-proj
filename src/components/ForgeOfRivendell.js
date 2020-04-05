import React, {Component} from 'react'
import { render } from '@testing-library/react'

class ForgeOfRivendell extends Component{
    constructor(){
        super()
        this.state = {
            showInputs: false,
            image: '',
            elvishName: '',
            weaponType: '',
            enchantment: '',
            orcsFelled: '',
            
        }
        this.handleForgeWeapon = this.handleForgeWeapon.bind(this)
    }
    
    handleForgeWeapon(){
        const newWeapon = {
            image: this.state.image,
            elvishName: this.state.elvishName,
            weaponType: this.state.weaponType,
            enchantment:this.state.enchantment,
            orcsFelled: this.state.orcsFelled,
            
            
        }
        this.props.forgeWeapon(newWeapon)
    }

    render(){
        return (
            <div>
                <button className='forge-button' onClick={() => this.setState({showInputs: true})}>Forge Your Own Weapon</button>
                {this.state.showInputs ? (
                    <div>
                        <input 
                        value={this.state.image} onChange={(e) => this.setState({image: e.target.value })} 
                        />
                        <input 
                        placeholder={"Epic Elvish Name"} value={this.state.elvishName} onChange={(e) => this.setState({elvishName: e.target.value })} 
                        />
                        <input placeholder={"Weapon Type"} value={this.state.weaponType} onChange={(e) => this.setState({weaponType: e.target.value })} 
                        />
                        <input placeholder={"Special Property"} value={this.state.enchantment} onChange={(e) => this.setState({enchantment: e.target.value })} 
                        />
                        <input type = 'number' placeholder={"Filthy Orcs Slain"} value={this.state.orcsFelled} onChange={(e) => this.setState({orcsFelled: e.target.value })} 
                        />    
                        <button onClick={this.handleForgeWeapon}>Save</button>                   
                    </div>
                ): null}
        </div>
    )
}
}


export default ForgeOfRivendell