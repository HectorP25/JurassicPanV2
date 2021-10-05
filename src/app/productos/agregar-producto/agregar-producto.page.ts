import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  constructor(private ps : ProductosService, private router : Router, private menu : MenuController) { }

  ngOnInit() {
  }

  ionViewWillmenu() {
    this.menu.enable(true);
  }

  toggleMenu2(){
    this.menu.toggle();
  }

  agregarProducto(titulo, tipo, url, precio, descripcion){
    this.ps.addProductos(titulo.value, tipo.value, url.value, precio.value, descripcion.value);
    this.router.navigate(['/productos']);
  }
}
