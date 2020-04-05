const express = require('express')
const PORT = 8787

const app = express()
const weaponsCtrl = require("./controllers/weapons")

app.use(express.json())


app.get("/api/weapons", weaponsCtrl.showArmory)

app.post('/api/weapons', weaponsCtrl.forgeWeapon)

app.put('/api/weapons/:id', weaponsCtrl.editOrcsFelled)

app.delete('/api/weapons/:id', weaponsCtrl.equipWeapon)


app.listen(PORT, () => console.log(`LOTR on port ${PORT}`))