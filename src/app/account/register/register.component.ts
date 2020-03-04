import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { StorageService } from '../../services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor( private storage: StorageService, private router: Router) { }

  newUser:{ 
    firstName?: string, 
    lastName?: string, 
    email?: string, 
    password?: string, 
    passwordRepeat?: string} = {}

  ngOnInit() {
  }

  onSubmit(){
    const result = this.storage.registerUser({ 
      firstname: this.newUser.firstName, 
      lastname: this.newUser.lastName, 
      email: this.newUser.email, 
      passwordHash : this.newUser.password 
    })
    if(result == true){
      this.router.navigate(['account/login'])
    }
  }

}
