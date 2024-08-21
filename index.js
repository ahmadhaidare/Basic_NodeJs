const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express()

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.get("/test", (req,res) => {
    let response = {
        message: "Ini end-point pertama ku",
        method: req.method,
        code: res.statusCode
        }
        
        res.json(response)     
})

app.listen(8000, () => {
    console.log("Server run on port 8000");
   })
   