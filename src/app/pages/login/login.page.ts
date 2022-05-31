import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserDTO } from 'src/app/models/user/user-dto';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor( private fb: FormBuilder , private user: LoginService) { }

  loginServer(): void{

      this.user.login(this.formLogin.get("username").value, this.formLogin.get("password").value).subscribe(res => {
        
        const data: UserDTO = res;
        console.log(data);

      } )

  }

  ngOnInit() {
  }

}
