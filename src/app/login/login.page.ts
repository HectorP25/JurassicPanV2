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

  toggleMenu(){
    this.menu.toggle;
  }
  
  login(form){
    var user = form.value["user"];
    var pass = form.value["pass"];

    if(user == "admin" && pass == "123"){
      console.log("Logeado")
      this.router.navigate(['/home'])
    }
  }
}
