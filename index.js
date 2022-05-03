//modulos nativos


const path = require ("path") // NOS PERMITE ADMINISTRAR RUTAS


//modulos externos
const express = require("express")
const port = 4000

//IMPORTANDO ROUTER
const users = require("./routes/users")

const app = express()

//SECCION DE CODIGO PARA LOS MIDDLEWARE
//Middleware para archivos estaticos

app.use("/static",express.static(path.join(__dirname,"static")))


//SECCION DE CODIGO PARA LOS ROUTER
app.use(users)

app.listen(port,()=>{
    console.log("Escuchando: http://localhost:" + port)
})

app.get("/", function(req,res){
    console.log(__dirname)//Ruta de nuestro proyecto
    return res.sendFile(path.join(__dirname, "views", "index.html"))
})