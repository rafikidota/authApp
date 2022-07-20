import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    email: ['test1@test.com', [Validators.required,Validators.email]],
    password: ['123456', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {  }

  login(){
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
  }

}
