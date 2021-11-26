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

  constructor(private menu: MenuController, private router : Router, private alertController : AlertController) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.menu.enable(false);
  }
  
  async login(form){
    var user = form.value["user"];
    var pass = form.value["pass"];

    const { data } = await axios.post('http://localhost:1337/auth/local', {
    identifier: user,
    password: pass,
    });
    let token_jwt = data.jwt;
    localStorage.setItem("jwt",token_jwt);
    this.router.navigate(['/home'])
  }
}
