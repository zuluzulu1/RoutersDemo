import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor() { }

  /*
  1) Register user
  2) Authenthicate user
  */

  registerUser(user: UserModel) : boolean{
    let users = window.localStorage.getItem('users')
    if(!users){
      users = '[]'
    }

    var usersArray:UserModel[] = JSON.parse(users)
    usersArray.push(user)
    window.localStorage.setItem('users', JSON.stringify(usersArray))
    return true
  }

  getUserByEmail(email: string) : UserModel{
    let users = window.localStorage.getItem('users')
    if(!users){
      return null
    }

    const usersArray:UserModel[] = JSON.parse(users)
    for(var user of usersArray)
    {
      if(user.email == email){
        return user
      }
    }

    //usersArray.filter(x => x.email == email)
    return null
  }



}
