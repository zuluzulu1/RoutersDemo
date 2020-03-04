import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getAll():UserModel[]{
    return [
      {
        email: 'zaqroo@gmail.com',
        firstname:'zaka',
        lastname:'buts',
        passwordHash: ''
      },
      {
        email: 'tamusa@gmail.com',
        firstname:'tam',
        lastname:'tam',
        passwordHash: ''
      }
    ]
  }
}
