import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService:LoginService, private router:Router) {
  }

  user: {
    email: string,
    password: string
  } = { email: '', password: ''}

  ngOnInit() {
  }

  onSubmit(){
    if(this.loginService.authenticate(this.user.email, this.user.password)){
      this.router.navigate(['/']);
    }
    else{
      alert('User or password is incorrect!')
    }
  }

}
