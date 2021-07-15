import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-cuotas',
  templateUrl: './cuotas.component.html',
  styleUrls: ['./cuotas.component.css']
})
export class CuotasComponent implements OnInit {

  cuotas = [
    {"id": 1, "monto": " $1500", "estado": "info", "color":"var(--detalle-naranja)"},
    {"id": 2, "monto": " $1500", "estado": "info", "color":"var(--detalle-naranja)"},
    {"id": 3, "monto": " $1500", "estado": "check_circle", "color":"var(--detalle-verde)"},
    {"id": 4, "monto": " $1500", "estado": "check_circle", "color":"var(--detalle-verde)"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick(cuota:any) {
    alert("hola mundo!")
  }

}
