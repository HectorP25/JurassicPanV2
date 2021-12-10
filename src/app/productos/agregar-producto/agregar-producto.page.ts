import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { ProductosService } from '../productos.service';
import { TipoProductoService } from 'src/app/tipo-producto.service'; 
declare var require : any
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  lista : any = []

  private archivo : File = null;

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

  img(event){
     this.archivo = <File>event.target.files[0]
  }

  agregarProducto(titulo, tipo, precio, descripcion, oferta){

    const axios = require('axios')

    const STRAPI_BASE_URL = 'https://strapijpv2.herokuapp.com'

    const datos = new FormData()
    datos.append('files', this.archivo)
    datos.append('ref', 'Producto')
    datos.append('refId', localStorage.getItem("ultimoID"))
    datos.append('field', 'imagen')

    axios.post(`${STRAPI_BASE_URL}/upload`, datos)

    this.ps.addProductos(titulo.value, tipo.value, precio.value, descripcion.value, oferta.checked).subscribe(
      (resp) => { console.log("Agrego : " + resp )
                  this.lista = resp 
                  this.router.navigate(['/productos']);},
      (err) => { console.log(err)}
    );
    
  }

  
}
