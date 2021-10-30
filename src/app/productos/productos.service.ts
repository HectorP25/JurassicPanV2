import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos : any = [ ]

  constructor( private http : HttpClient) { }

  getProductos(){
    return this.http.get('http://localhost:1337/Productos');
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
