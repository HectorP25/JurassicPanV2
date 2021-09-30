import { Component, OnInit } from '@angular/core';
// Enrutar
import { ActivatedRoute, Router } from '@angular/router'; 
// Conectar servicio
import { ProductosService } from '../productos.service';
import { producto } from './producto.model';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  datos : producto;

  // Se crea una variable para capturar la URL activa
  constructor(private ar : ActivatedRoute, private ps : ProductosService, private rou : Router) { }

  ngOnInit() {

    // vamos a buscar el producto por el ID que viene de la URL
    this.ar.paramMap.subscribe( pm => {

      // vamos a capturar el id que viene en la URL
      const valor = pm.get('prodID')
      // verificar por consola que rescata ID
      console.log("ID : " + valor)

      // llamamos al servicio y le pasamos el ID
      this.datos = this.ps.getProductosById(valor)
      // Verificar que valor se guarde en servicio correctamente
      console.log(this.datos)
    })
  }

  // agregamos el metodo para eliminar
  eliminar(){
    console.log("Eliminado")
    this.ps.deleteProductos(this.datos.id)
    // redireccionar a la pagina de productos
    this.rou.navigate(['/productos'])

    // 
  }
}
