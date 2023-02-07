import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FireService } from 'src/app/services/fire.service';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
states: any = [];
stateName:any;
districtName: any = [];
  constructor(public formService:FormService,
              public fireService: FireService) { }

  ngOnInit(): void {
    this.getState()
    this.fireService.getUserList();
    console.log(this.formService.form.controls.address.get('district'))
  
  }
getForm(): any{
return  this.formService.form.controls;
}
onSubmit(){
  console.log(this.formService.form.value);
  if(this.formService.form.value._id == ''){
    this.fireService.insertUser(this.formService.form.value);

  }
else{
  this.fireService.updateUser(this.formService.form.value)
}
  this.formService.form.controls.fullName.reset();
  this.formService.form.controls.email.reset();
  this.formService.form.controls.mobile.reset();
  this.formService.form.controls.address.get('landmark')?.setValue('');
  this.formService.form.controls.address.get('state')?.setValue(null);
  this.formService.form.controls.address.get('district')?.setValue(null);

}
getState(){
  this.formService.getStateName().subscribe((res: any) => {
   this.states = res.states;

  })
}
onChange(){
  this.stateName = this.formService.form.controls.address.value.state;
let i = this.states.findIndex((x: any )=> x.state === this.stateName)
this.districtName = this.states[i].districts;
  console.log(this.districtName)
}


}
