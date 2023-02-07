import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(public fb: FormBuilder,
              private http: HttpClient) { }

  form = this.fb.group({
_id: [''],
    fullName:this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required]
    }),
    email:['', [Validators.required ,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$') ]],
    mobile: ['',[Validators.required, Validators.pattern('^[0-9]+$') , Validators.minLength(10)]],
    address: this.fb.group({
      landmark: [''],
     state: [null],
      district: [null]
    }),
    gender: ['male']
  })
  getStateName(){
  return  this.http.get('assets/india.json')
  }

}
