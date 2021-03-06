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

  datos : any = [];

  private url

  private pid;

  constructor(private ar : ActivatedRoute, private ps : ProductosService, private rou : Router, private menu : MenuController) { }

  ngOnInit() {

    this.ar.paramMap.subscribe( pm => {

      const valor = pm.get('prodID')
      this.pid = valor;
    })

    this.ps.getProductosById(this.pid).subscribe(
      (resp : any) => { 
                  this.datos = resp
                  this.url = resp.imagen.url
                  console.log(resp)
      },
      (err) => { console.log(err) }
    )


  }

  eliminar(){
    console.log("Eliminado")
    this.ps.deleteProductos(this.datos.id).subscribe(
      (resp) => { this.datos = resp 
                  console.log(resp)
                  this.rou.navigate(['/productos'])},
      (err) => { console.log(err) }
    )
    console.log(this.datos)
    
  }

  editar(){
    this.rou.navigate(['actualizar-producto/' + this.pid])
  }

  ionViewWillmenu() {
    this.menu.enable(true);
  }

  toggleMenu2(){
    this.menu.toggle();
  }
}
