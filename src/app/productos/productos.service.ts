import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [
    {
      id : '1',
      titulo : 'Pastel de chocolate',
      tipo : 'Pastel',
      imagenURL : 'https://i.imgur.com/XBkwlT2.jpg',
      precio : 1000,
      descripcion : 'Trozo de pastel de chocolate relleno de un bizcocho sabor chocolate'
    },
    {
      id : '2',
      titulo : 'Berlini',
      tipo : 'Pastel',
      imagenURL : 'https://i.imgur.com/OrHYwgC.jpg',
      precio : 1000,
      descripcion : 'Rico berlin con crema pastelera'
    },
    {
      id : '3',
      titulo : 'Alfajor',
      tipo : 'Dulce',
      imagenURL : 'https://i.imgur.com/VuKyShM.jpg',
      precio : 1000,
      descripcion : 'Alfajor relleno de manjar'
    },
    {
      id : '4',
      titulo : 'Muffin',
      tipo : 'Dulce',
      imagenURL : 'https://i.imgur.com/exohXTc.png',
      precio : 1000,
      descripcion : 'Rico Muffin con chispas de chocolate'
    },
    {
      id : '5',
      titulo : 'Marraqueta',
      tipo : 'Pan',
      imagenURL : 'https://i.imgur.com/h8YIFlI.jpg',
      precio : 0,
      descripcion : 'Marraqueta gratis'
    },
    {
      id : '6',
      titulo : 'Hallullita',
      tipo : 'Pan',
      imagenURL : 'https://i.imgur.com/vdmYg0l.png',
      precio : 1000,
      descripcion : 'A las buenas hallullas'
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

  addProductos(tit : string, tipo : string, imgURL : string, precio : number, des:string){
    this.productos.push({
      id : String(this.productos.length + 1),
      titulo : tit,
      tipo : tipo,
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
