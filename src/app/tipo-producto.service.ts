import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {

  constructor( private http : HttpClient) { }

  getTipoProducto(){
    return this.http.get('http://localhost:1337/tipo-productos')
  }
}
