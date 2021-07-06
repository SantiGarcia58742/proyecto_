import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  registroForm: FormGroup | any;

  hide = true;

  constructor(private _Builder: FormBuilder, private http: HttpClient) { }

  ngOnInit(): void {
    this.registroForm = this._Builder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['',[ Validators.required, Validators.email]],
      dni: ['', Validators.required],
      pass: ['', Validators.required],
    })
  }


  // Realiza la solicitud post http, con los parametros recibidos, a la url definida y espera una respuesta del servidor
  postBack(data: any){
    this.http.post('http://localhost:3000/api/registrar', data).subscribe((res: any) => {
      console.log(res);
    });
  }


  // Obtiene los valores que hayamos puesto en el formulario de Registro y llama a la función postBack() enviando esos valores como parametros
  sendValues(){

    // Almacena los valores del formulario en una variable data
    let data = this.registroForm.value;

    this.postBack(data);
  }

}
