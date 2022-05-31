import { Component, OnInit } from '@angular/core';


import { UserDTO } from 'src/app/models/user/user-dto';
import { LoginService } from './login.service';

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


  

  loginServer(): void{

      this.user.login(this.formLogin.get("username").value, this.formLogin.get("password").value).subscribe(res => {
        
        const data: UserDTO = res;
        console.log(data);

      } )

  }


  constructor(private fb:FormBuilder, private user: LoginService) {
    this.formLogin=this.fb.group({
      username: ['',Validators.required, Validators.email],
      password:['',Validators.required,Validators.min(4)],
  })
   }


  ngOnInit() {
  }

}
