import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class FireService {
userList! : AngularFireList<any>;
  constructor(private firebase: AngularFireDatabase) { }

  getUserList(){
    this.userList = this.firebase.list('reactiveForm');
    return this.userList.snapshotChanges();
  }
  insertUser(user: any){
    this.userList.push({
      firstName: user.fullName.firstName,
      lastName: user.fullName.lastName,
      email: user.email,
      mobile: user.mobile,
      landmark: user.address.landmark,
      state: user.address.state,
      district: user.address.district,
      gender: user.gender

    })
    console.log(user);
  }
  updateUser(user: any){
    this.userList.update(user._id , ({
      firstName: user.fullName.firstName,
      lastName: user.fullName.lastName,
      email: user.email,
      mobile: user.mobile,
      landmark: user.address.landmark,
      state: user.address.state,
      district: user.address.district,
      gender: user.gender
    }))
  }
  deleteUser(key: any){
    this.userList.remove(key)
  }
}
