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
  user = localStorage.getItem("datosUsuario")
  
  constructor(private servicioProductos : ProductosService, private rout : Router, private menu: MenuController) { }

  ngOnInit() {
    this.productos = this.servicioProductos.getProductos();
  }

  ionViewWillEnter(){
    this.productos = this.servicioProductos.getProductos();
  }

  redireccionarAgregar(){
    console.log('Funciona metodo redireccion agregar');
    this.rout.navigate(['/agregar-producto']);
  }

  ionViewWillmenu() {
    this.menu.enable(true);
  }

  toggleMenu2(){
    this.menu.toggle();
  }
}
