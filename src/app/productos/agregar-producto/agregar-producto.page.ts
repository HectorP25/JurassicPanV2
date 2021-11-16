import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../productos.service';
import { TipoProductoService } from 'src/app/tipo-producto.service'; 

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  lista : any = []

  constructor(private ps : ProductosService, private router : Router, private menu : MenuController, private tps : TipoProductoService) { }

  ngOnInit() {
    this.tps.getTipoProducto().subscribe(
      (respuesta) => {
        this.lista = respuesta
      },
      (error) => {
        console.log("Error al cargar tipo de productos ")
        console.log(error)
      }
    )
  }

  ionViewWillmenu() {
    this.menu.enable(true);
  }

  toggleMenu2(){
    this.menu.toggle();
  }

  agregarProducto(titulo, tipo, url, precio, descripcion){
    this.ps.addProductos(titulo.value, tipo.value, url.value, precio.value, descripcion.value).subscribe(
      (resp) => { console.log("Agrego : " + resp)
                  this.router.navigate(['/productos']);},
      (err) => { console.log(err) }
    );
    
  }
}
