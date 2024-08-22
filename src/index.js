const express = require("express") //memanggil library express js
const cors = require("cors") //memanggil library cors
const app = express()

app.use(cors())

//import routes
const praktikum = require('./route/praktikumRoute')

//implementasi routes
app.use('/praktikum', praktikum)

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
});
   