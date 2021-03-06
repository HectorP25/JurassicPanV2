import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos : any = [ ]

  constructor( private http : HttpClient) { }

  getProductos(){
    return this.http.get('https://strapijpv2.herokuapp.com/Productos/');
  }

  getProductosById(pid : string){
    return this.http.get('https://strapijpv2.herokuapp.com/Productos/' + pid);
  }

  addProductos(tit : string, tipo : string, precio : number, des:string, oferta:boolean){
    var datos = {
      "titulo" : tit,
      "tipo" : tipo,
      "precio" : precio,
      "descripcion" : des,
      "oferta" : oferta
    }

    return this.http.post('https://strapijpv2.herokuapp.com/Productos/', datos);

  }

  deleteProductos(pid : string){
    return this.http.delete('https://strapijpv2.herokuapp.com/Productos/' + pid);
  }

  // update con problemas arreglas antes de envio
  updateProductos(pid : string, tit : string, tip : string, pre : number, desc : string){
    
    var datos2 = {
      "titulo" : tit,
      "tipo" : tip,
      "precio" : pre,
      "descripcion" : desc
    }

    return this.http.put('https://strapijpv2.herokuapp.com/Productos/'+ pid , datos2)
  }
}
