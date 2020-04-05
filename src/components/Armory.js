import React from 'react'
import Weapon from './Weapon'


function Armory(props){
    console.log(props.armoryWeapons)
    const weaponList = props.armoryWeapons.map(weapon => {
        return(
            <Weapon
                key={weapon.id}
                weapon={weapon}             
                orcsFelled={props.orcsFelled}
                equipWeapon={props.equipWeapon}
            />
        )
    })
    return (
        <div>
            
            {weaponList}
        </div>
    )
}

export default Armory