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
email:string;
password:string;

formLogin;
clickable=true;

  

  loginServer(){

      this.user.login(this.email, this.password).subscribe(resp => {
        
        const data: UserDTO = resp;
        console.log(data);

      } )

  }


  constructor(private fb:FormBuilder, private user: LoginService) {
   
   }


  ngOnInit() { this.formLogin=this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password:['',[Validators.pattern,Validators.required,Validators.minLength(4)]],
  })
  }

}
