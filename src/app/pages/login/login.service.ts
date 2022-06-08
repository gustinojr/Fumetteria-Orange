import { Injectable } from '@angular/core';
import { UserCommand } from 'src/app/models/user/user-command';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  
  login( email: string, password: string) {
    
    const user = new UserCommand;
    user.email = email;
    user.password = password;

    return this.http.post<any>("http://2.44.173.210:7080/comic-be/api/login/login", user);

  }

}

