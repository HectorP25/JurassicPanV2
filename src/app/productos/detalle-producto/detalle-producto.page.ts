import { Component, OnInit } from '@angular/core';
// Enrutar
import { ActivatedRoute, Router } from '@angular/router'; 
import { MenuController } from '@ionic/angular';
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

  constructor(private ar : ActivatedRoute, private ps : ProductosService, private rou : Router, private menu : MenuController) { }

  ngOnInit() {

    this.ar.paramMap.subscribe( pm => {

      const valor = pm.get('prodID')
      console.log("ID : " + valor)

      this.datos = this.ps.getProductosById(valor)
      console.log(this.datos)
    })
  }

  eliminar(){
    console.log("Eliminado")
    this.ps.deleteProductos(this.datos.id)
    this.rou.navigate(['/productos'])
  }

  ionViewWillmenu() {
    this.menu.enable(true);
  }

  toggleMenu2(){
    this.menu.toggle();
  }
}
