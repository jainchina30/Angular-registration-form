import { Component, OnInit } from '@angular/core';

import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userForm : FormGroup;

  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      'userName' : [null, Validators.compose([Validators.required,Validators.minLength(5),
        Validators.maxLength(15)])],
      'password': [null, Validators.compose([Validators.required,Validators.minLength(5),
        Validators.maxLength(15)])]
    })
   }

  ngOnInit() { 
  }

  loginUser(value: any) {
    console.log(value);

    console.log(`Login ${this.userForm.value}`);
    if (this.userForm.valid) {

    }

   

    //  if(username == 'admin' && password == 'admin'){
      
    //  }
  }

}
