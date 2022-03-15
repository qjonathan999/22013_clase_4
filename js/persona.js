export default class Persona{
    constructor(nombre,apellido,edad,altura){
        this.nombre=nombre
        this.apellido=apellido
        this.edad=edad
        this.altura=altura
    }
    saludar(){
        return `Hola, mi nombre es: ${this.nombre}`
    }
    soyAlto(){
        return this.altura>1.80
    }
    miEdad(){
        return this.edad
    }
}
