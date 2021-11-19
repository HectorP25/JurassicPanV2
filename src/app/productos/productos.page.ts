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

  // esta variable recibe todo lo que tiene la API
  productos: any = []

  user = localStorage.getItem("datosUsuario")

  constructor(private servicioProductos: ProductosService, private rout: Router, private menu: MenuController) { }

  ngOnInit() {
    this.servicioProductos.getProductos().subscribe(
      (resp) => {
        this.productos = resp
        localStorage.setItem("ultimoID", this.productos[this.productos.length - 1].id + 1)
        console.log("Test : ", this.productos[this.productos.length - 1].id + 1)
      },
      (err) => { console.log(err) }
    )
  }

  ionViewWillEnter() {
    this.servicioProductos.getProductos().subscribe(
      (resp) => {
        this.productos = resp
        localStorage.setItem("ultimoID", this.productos[this.productos.length - 1].id + 1)
        console.log("Test : ", this.productos[this.productos.length - 1].id + 1)
      },
      (err) => { console.log(err) }
    )
  }

  redireccionarAgregar() {
    console.log('Funciona metodo redireccion agregar');
    this.rout.navigate(['/agregar-producto']);
  }

  ionViewWillmenu() {
    this.menu.enable(true);
  }

  toggleMenu2() {
    this.menu.toggle();
  }
}
