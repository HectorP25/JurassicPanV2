import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos : any = [ ]

  constructor( private http : HttpClient) { }

  getProductos(){
    return this.http.get('http://localhost:1337/Productos/');
  }

  getProductosById(pid : string){
    return this.http.get('http://localhost:1337/Productos/' + pid);
  }

  addProductos(tit : string, tipo : string, imgURL : string, precio : number, des:string){
    var datos = {
      "titulo" : tit,
      "tipo" : tipo,
      "imagenURL" : imgURL,
      "precio" : precio,
      "descripcion" : des
    }

    return this.http.post('http://localhost:1337/Productos/', datos);

  }

  deleteProductos(pid : string){
    return this.http.delete('http://localhost:1337/Productos/' + pid);
  }
}
