import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario = {
    userName: 'Pepe',
    password: '1234',
    repeatPassword: '1234'
  };

  constructor() { }

  ngOnInit(): void {
  }

  login(form): void {
    console.log(form);


    console.log(this.usuario);
  }
}
