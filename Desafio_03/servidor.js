const fs=require('fs')
let txt=fs.readFileSync('./productos.txt')
let arreglo=JSON.parse(txt)

class Contenedor{
    constructor(){
    }
    escribir(arreglo){
        const nTexto=JSON.stringify(arreglo,null,'\t')
        fs.writeFileSync('./productos.txt',nTexto)
        console.log(this.getAll())
    }
    save(objeto){
        objeto=Object.assign(objeto,{id:arreglo.length+1})
        arreglo.push(objeto)
        this.escribir(arreglo)
    }
    getById(num){
        return arreglo.map(el => el)[num-1]
    }
    getAll(){
        return arreglo.map(el => el)
    }
    deleteById(num){
        arreglo.splice(num-1,1)
        this.escribir(arreglo)
    }
    deleteAll(){
        arreglo.splice(0,arreglo.length)
        this.escribir(arreglo)
    }
}
let nuevo= new Contenedor()
const express = require('express')
const app = express()
const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 })
server.on("error", error => console.log(`Error en servidor ${error}`))

app.get('/', (solicitud, respuesta) => {
    respuesta.send('<h1 style="color:blue">Bienvenidos al servidor express</h1>')
})

app.get('/productos', (solicitud, respuesta) => {
    respuesta.send(arreglo)
})

app.get('/productosRandom', (solicitud, respuesta) => {
    respuesta.send(arreglo[Math.floor(Math.random() * (arreglo.length - 1)) + 0])
})