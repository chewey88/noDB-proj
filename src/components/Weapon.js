import React, {Component} from 'react'

class Weapon extends Component{
    constructor(){
        super()
        this.state = {
            newOrcsFelled: 0,
        }
        this.toggleEdit = this.toggleEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleOrcsFelled = this.handleOrcsFelled.bind(this)
    }
    toggleEdit(){
        this.setState({
            newOrcsFelled: true
        })
    }
    handleChange(event){
        this.setState({
            newOrcsFelled: event.target.value
        })
    }

    handleOrcsFelled(){
        this.props.orcsFelled(this.props.weapon.id, this.state.newOrcsFelled)
        this.toggleEdit()
    }
    render(){
        const {weapon} = this.props
        return(
            <div className='epic-weapons'> 
                <img className='swords'src={weapon.image} />
                <div className="weapon-details">
                    <p><span className='label'>Name:</span> {weapon.elvishName}</p>
                    <p><span className='label'>Weapon Type:</span> {weapon.weaponType}</p>
                    <p><span className='label'>Special Property:</span> {weapon.enchantment}</p>
                    <p><span className='label'>Orcs Felled:</span> {weapon.orcsFelled}</p>
                </div>
                <div className='cancel-save-bu'>
                    <input onChange={this.handleChange} type='number'/>
                    <button 
                    onClick={this.toggleEdit}>Cancel
                    </button>
                    <button 
                    onClick={this.handleOrcsFelled}>Save
                    </button>
                </div>
                <div className='equip-button'>
                    <button
                    onClick={() => this.props.equipWeapon(weapon.id)}>Equip Weapon
                 </button>
                </div>
             </div>
        )
    }
}

export default Weapon