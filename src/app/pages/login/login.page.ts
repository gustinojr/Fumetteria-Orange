import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
username:string;
password:string;
formLogin;


  constructor(private fb:FormBuilder) {
    this.formLogin=this.fb.group({
      username: ['',Validators.required, Validators.email],
      password:['',Validators.required,Validators.min(4)],
  })
   }

  ngOnInit() {
  }

}
