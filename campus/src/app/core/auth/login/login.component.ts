import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup | any;

  hide = true;

  constructor(private _Builder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.loginForm = this._Builder.group({
      email: ['',[ Validators.required, Validators.email]],
      pass: ['', Validators.required],
    })
  }


  postBack(data: any){
    this.http.post('http://localhost:3000/api/registrar', data).subscribe((res: any) => {
      console.log(res);
    });
  }


  sendValues(){

    let data = this.loginForm.value;

    this.postBack(data);
  }
}
