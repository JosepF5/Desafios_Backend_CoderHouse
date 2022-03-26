const express = require('express')

const app = express()

app.use('/static', express.static(__dirname + '/public'));

app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// https://expressjs.com/en/guide/routing.html

const productos = [
    {
        title: 'Monitor Asus Tuf Gaming',
        price: 1200,
        thumbnail: 'https://res.cloudinary.com/reprogram/image/upload/v1644499345/monitor_asus_yhrvvt.png',
    },
    {
        title: 'Logitech G733 Negro',
        price: 799,
        thumbnail: 'https://res.cloudinary.com/reprogram/image/upload/v1644499344/g733-black-gallery-1_kideae.png',
    },
]

app.route('/productos')
    .get((req, res) => {
        res.send(productos)
    })
    .post((req, res) => {
        const nProducto = req.body
        productos.push(nProducto)
        res.send('Producto Guardado')
    })    
app.route('/productos/:id')
    .get((req, res) => {
        const num=req.params.id-1;
        if(num>=productos.length || req.params.id<1){
            res.send({error: 'El parámetro está fuera de rango'})
            return
        }else{
            res.send(productos[num])
        }
    })
    .delete((req, res) => {
        const num=req.params.id-1;
        console.log(req.params.id+productos.length)
        if (num>=productos.length || req.params.id<1) {
            res.send({error: 'El parámetro está fuera de rango'})
            return 
        }else{
            productos.splice(num, 1);
            return res.send('Producto Eliminado!');
        }
    }) 

app.listen(8080)