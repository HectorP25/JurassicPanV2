import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private ps : ProductosService, private router : Router) { }

  ngOnInit() {
  }

  // Creamos metodo agregar producto
  agregarProducto(titulo, url, comentario){
    var lista = []
    if (comentario.value !== ""){
      lista.push(comentario.value)
    }else{
      lista = null
    }
    
    this.ps.addProductos(titulo.value, url.value, lista);
    this.router.navigate(['/productos']);
    //  https://www.lacuarta.com/wp-content/uploads/2020/03/pancito.jpg
  }
}
