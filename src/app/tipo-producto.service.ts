import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  constructor( private http : HttpClient) { }

  getTipoProducto(){
    return this.http.get('https://strapijpv2.herokuapp.com/tipo-productos')
  }
}
