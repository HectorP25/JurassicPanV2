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

  agregarProducto(titulo, url,precio, descripcion){
    this.ps.addProductos(titulo.value, url.value, precio.value, descripcion.value);
    this.router.navigate(['/productos']);
  }
}
