class Libros{
    constructor(nombre,autor){
        this.nombre=nombre;
        this.autor=autor;
    }
}
class  Usuario{
    constructor(nombre,apellido){
        this.nombre=nombre;
        this.mascotas=[];
        this.libros=[];
        this.apellido=apellido;
    }
    getFullName(){
        let dialogo="Su nombre completo es: "+ this.nombre+" "+this.apellido+"!";
        return dialogo;
    }
    addMascota(nombre){
        this.mascotas.push(nombre);
    }
    countMascotas(){
        return this.mascotas.length;
    }
    addBook(nombre,autor){
        let libro=new Libros(nombre,autor);
        console.log(this.libros.length);
        this.libros.push(libro)
    }
    getBookNames(){
        let nombres=[];
        for (let index = 0; index < this.libros.length; index++) {
            nombres.push(this.libros[index].nombre);
        }
        return nombres;
    }
}
/*GetFullName()*/
let nuevo= new Usuario("Josep","Palomino");
let dialogo=nuevo.getFullName();
console.log(dialogo);
/*AddMascota()*/
nuevo.addMascota("Copito");
nuevo.addMascota("Soonie");
/*CountMascotas()*/
let cantMascotas=nuevo.countMascotas();
console.log(cantMascotas);
/*AddBook()*/
nuevo.addBook("El señor de las moscas","William Golding");
nuevo.addBook("'Fundacion'","Isaac Asimov");
/*GetBookNames*/
let nombres=nuevo.getBookNames();
console.log(nombres);

