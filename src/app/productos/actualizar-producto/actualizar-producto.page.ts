import { Component, OnInit } from '@angular/core';
// Enrutar
import { ActivatedRoute, Router } from '@angular/router'; 
import { MenuController } from '@ionic/angular';
// Conectar servicio
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-actualizar-producto',
  templateUrl: './actualizar-producto.page.html',
  styleUrls: ['./actualizar-producto.page.scss'],
})
export class ActualizarProductoPage implements OnInit {

  constructor(private ar : ActivatedRoute, private ps : ProductosService, private rou : Router, private menu : MenuController) { }

  producto : any = [];

  private idProducto;

  ngOnInit() {
    this.ar.paramMap.subscribe( pm => {

      const valor = pm.get('prodID')
      console.log("ID : " + valor)
      this.idProducto = valor

      this.ps.getProductosById(valor).subscribe(
        (resp : any) => { this.producto = resp 
                    console.log(resp)},
        (err) => { console.log(err) }
      )
      console.log(this.producto)
    })
  }

  actualizarProducto(titulo,tipo,imagenURL,precio,descripcion){

    this.ps.updateProductos(this.idProducto,titulo,tipo,imagenURL,precio,descripcion).subscribe(
      (resp) => { 
                  this.rou.navigate([' /productos']) 
                  console.log(resp)},
      (err) => { console.log(err) }
    )
    

  }

}
