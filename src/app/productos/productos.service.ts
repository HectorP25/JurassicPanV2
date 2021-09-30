import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private productos = [
    {
      id : '1',
      titulo : 'Lasagna',
      imagenURL : 'https://cdn.colombia.com/gastronomia/2011/08/25/lasagna-3685.jpg',
      comentarios : ['Lasagna rica','Muy rica']
    },
    {
      id : '2',
      titulo : 'Pastel de choclo',
      imagenURL : 'https://doncucharon.com/fotos/recetas/144/pastel-de-choclo.jpg',
      comentarios : []
      // 'rico rico','Muy rica'
    },
    
  ]

  constructor() { }

  // Buscar productos
  getProductos(){
    // Retornamos una lista de productos
    return [...this.productos]
  }

  // Buscar por ID
  getProductosById(pid : string){
    // Se busca un elemento por ID y se retorna un objeto
    return{
      ...this.productos.find( serv => {
      return serv.id === pid
    } )
    }
  }

  // Agregar productos
  addProductos(tit : string, imgURL : string, com:string[]){
    // Agregar un producto nuevo a la lista
    this.productos.push({
      // Id corresponde al ultimo elemento registrado + 1 
      id : String(this.productos.length + 1),
      titulo : tit,
      imagenURL : imgURL,
      comentarios : com
    })
  }

  // eliminar productos
  deleteProductos(pid : string){
    // se crea un arreglo nuevo eliminando registro que tiene el id que estoy buscando
    // luego se sobreescribe la lista por la nueva sin el producto
    this.productos =  this.productos.filter(serv => {
                        return serv.id !== pid
                      })
  }
}
