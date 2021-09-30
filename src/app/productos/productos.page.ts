import { Component, OnInit } from '@angular/core';
import { ProductosService } from './productos.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  private productos = []
  
  // el constructor utiliza el servicio y este servicio ahora es parte del html
  constructor(private servicioProductos : ProductosService, private rout : Router, private menu2: MenuController) { }

  ngOnInit() {
    // tomando del servicio el metodo buscar todo
    this.productos = this.servicioProductos.getProductos();
  }

  ionViewWillEnter(){
    this.productos = this.servicioProductos.getProductos();
  }

  // Agregar el redirecionar del boton agregar
  redireccionarAgregar(){
    console.log('Funciona metodo redireccion agregar');
    this.rout.navigate(['/agregar-producto']);
  }

  toggleMenu2(){
    this.menu2.toggle();
  }
}
