import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import axios, { Axios } from 'axios';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu: MenuController, private router : Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  
  login(form){
    var user = form.value["user"];
    var pass = form.value["pass"];
  }

  try{
    
    const { data } = await axios.post('http://localhost:1337/auth/local', {
    identifier: user,
    password: pass,
    });
    console.log(data);
    let token_jwt = data.jwt;
    localStorage.setItem("jwt",token_jwt);
    const alert = await this.alertController.create({
      header: 'Bienvenido ' + data.user.username,
      message: 'Ingreso Exitoso',
      buttons: ['Aceptar']
    });

    await alert.present();
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', data.user.role.name);
      this.router.navigate(['/home'])

  } catch (error) {
    console.log(error);
    const alert = await this.alertController.create({
      header: 'ERROR',
      message: 'Credenciales Incorrectas',
      buttons: ['Aceptar']
    });
    await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
  }
}
