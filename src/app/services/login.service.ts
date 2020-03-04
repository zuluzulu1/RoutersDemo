import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private storage:StorageService) { }

  authenticate(email:string, password: string) : boolean{
    const user = this.storage.getUserByEmail(email)
    if(user && user.passwordHash == password){
      return true
    }
    return false;
  }
}
