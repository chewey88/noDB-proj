const weapons = require('../weaponData.json')
let id = 5

module.exports = {
    showArmory: (req, res) => {
        res.status(200).send(weapons)
    },
    
    forgeWeapon: (req, res) => {
        const {image, elvishName, weaponType, enchantment, orcsFelled} = req.body
        const forgedWeapon = {
            image,
            elvishName,
            weaponType,
            enchantment,
            orcsFelled,
            id
        }
        weapons.push(forgedWeapon)

        id++
        res.status(200).send(weapons)
    },
    editOrcsFelled: (req, res) => {
        const {id} = req.params
        const {newOrcsFelled} = req.body

        const index = weapons.findIndex(weapons => {
            return weapons.id === +id
        })
        if (index === -1){
            return res.status(404).send('That Weapon must be lost to the ages')
        }
        weapons[index].orcsFelled = newOrcsFelled
        res.status(200).send(weapons)
    },
    equipWeapon: (req, res) => {
        const{id} = req.params
        const index = weapons.findIndex(weapons => {
            return weapons.id === +id
        })
        if (index === -1){
            return res.status(404).send('That Weapon must be lost to the ages')
        }
        weapons.splice(index, 1)
        res.status(200).send(weapons)
    },
}