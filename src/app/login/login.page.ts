import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

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

    if(user == "admin" && pass == "admin"){
      console.log("Logeado")
      localStorage.setItem("datosUsuario",user);
      this.router.navigate(['/home'])
    }
  }

}
