import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {   Router } from '@angular/router';
import { FireService } from '../../services/fire.service';
import { FormService } from '../../services/form.service';
import { state } from '@angular/animations';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
userList: any= [];
@ViewChild(HomeComponent) home!: HomeComponent
  constructor(private fireService:FireService,
              private route: Router,
              public formService:FormService,
              public fb: FormBuilder) { }

  ngOnInit(): void {
    this.fireService.getUserList().subscribe((data: any) =>{
    let array = data.map((data: any) => {
      return {
        ...data.payload.val(),
        $key: data.key
      }
    })
    this.userList = array
    console.log(this.userList)
    })
  }
tableEdit(user: any){
  this.route.navigate(['/add']);
this.formService.form = this.fb.group({
    _id: [user.$key],
        fullName:this.fb.group({
          firstName: [user.firstName],
          lastName: [user.lastName]
        }),
        email:[user.email],
        mobile: [user.mobile],
        address: this.fb.group({
          landmark: [user.landmark],
         state: [user.state],
          district: []
        }),
        gender: [user.gender]
      })

    

}
onDelete(user: any){
this.fireService.deleteUser(user.$key);

}
}
