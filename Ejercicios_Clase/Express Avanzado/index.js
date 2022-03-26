const express=require('express')
const app=express()

const PORT=8080
const server=app.listen(PORT,()=>{
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on("error",error=>console.log(`Error en el servidor ${error}`))

app.get('/usuarios',(req,res)=>{
    const nombre=req.query.nombre;
    res.send(`Hola! ${nombre}`)
})
const frase='Hola mundo como están';
//Item 01
app.get('/frase',(req,res)=>{
    res.send(`${frase}`)
})
//Item 02
app.get('/letras/:num',(req,res)=>{
    const num=req.params.num;
    res.send(`Hola! ${frase[num]}`)
})
//Item 03
app.get('/palabras/:num',(req,res)=>{
    const num=req.params.num;
    res.send(`Hola! ${frase.split(' ')[num]}`)
})