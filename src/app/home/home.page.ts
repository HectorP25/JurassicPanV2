import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private menu: MenuController) { }

  user = localStorage.getItem("datosUsuario")

  ngOnInit() {
  }
  
  ionViewWillEnter() {
    this.menu.enable(true);
  }

  toggleMenu(){
    this.menu.toggle();
  }

}
