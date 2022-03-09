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
//Creacion de objeto Contenedor
nuevo= new Contenedor()
//Metodo Save()
//-->nuevo.save({nombre:"Book",price:234,thumbnail:"https://cdn2.iconfinder.com/data/icons/school-supplies-7/64/164_school-open-study-education-book-library-512.png"})
//Metodo getById(number)
//-->console.log(nuevo.getById(3))
//Metodo getAll()
//-->console.log(nuevo.getAll())
//Metodo deleteById()
//-->nuevo.deleteById(4)
//Metodo deleteAll()
//-->nuevo.deleteAll()