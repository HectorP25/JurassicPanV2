import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [
    {
      id : '1',
      titulo : 'Trozo de pastel de chocolate',
      imagenURL : 'https://i.imgur.com/XBkwlT2.jpg',
      precio : 1000,
      descripcion : 'Trozo de pastel de chocolate relleno de un bizcocho sabor chocolate'
    },
    {
      id : '2',
      titulo : 'Berlini',
      imagenURL : 'https://i.imgur.com/OrHYwgC.jpg',
      precio : 1000,
      descripcion : 'Rico berlin con crema pastelera'
    },
    
  ]

  constructor() { }

  getProductos(){
    return [...this.productos]
  }

  getProductosById(pid : string){
    return{
      ...this.productos.find( serv => {
      return serv.id === pid
    } )
    }
  }

  addProductos(tit : string, imgURL : string, precio : number, des:string){
    this.productos.push({
      id : String(this.productos.length + 1),
      titulo : tit,
      imagenURL : imgURL,
      precio : precio,
      descripcion : des
    })
  }

  deleteProductos(pid : string){
    this.productos =  this.productos.filter(serv => {
                        return serv.id !== pid
                      })
  }
}
