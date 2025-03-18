const express = require('express')
const app = express()

const PORT = 8000

app.listen(PORT, () =>{
    console.log("App is Running on PORT", PORT)
})