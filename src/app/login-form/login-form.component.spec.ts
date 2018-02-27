import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { Component, OnInit } from '@angular/core';
// import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ReactiveFormsModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    //component.ngOnInit();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.userForm.valid).toBeFalsy();
  });

  it('userName field validity', () => {
    let userName = component.userForm.controls['userName']; 
    expect(userName.valid).toBeFalsy(); 
    let errors = {};
    errors = userName.errors || {};
   expect(errors['required']).toBeTruthy();

    userName.setValue("abcdef");
    errors = userName.errors || {};
    //expect(errors['minlength']).toBeTruthy();
    expect(errors['required']).toBeFalsy();
  });

  it('password field validity', () => {
    let password = component.userForm.controls['password']; 
    expect(password.valid).toBeFalsy(); 
    let errors = {};
    errors = password.errors || {};
   expect(errors['required']).toBeTruthy();

    password.setValue("abcdef");
    errors = password.errors || {};
    expect(errors['required']).toBeFalsy();
    
  });

});
