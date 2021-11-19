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
      this.idProducto = valor

      this.ps.getProductosById(valor).subscribe(
        (resp : any) => { this.producto = resp 
                    console.log(resp)},
        (err) => { console.log(err) }
      )
      console.log(this.producto)
    })
  }

  // Actualizar con problemas, no actualiza aplicacion error en metodo o aqui
  actualizarProducto(tit,tip,pre,desc){

    this.ps.updateProductos(this.idProducto,tit,tip,pre,desc).subscribe(
      (respuesta) => {
        
        this.rou.navigate(['/productos'])
      },
      (error) => {
        console.log(error)
      }
    )
      
    

  }

}
