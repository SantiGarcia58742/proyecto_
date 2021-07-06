import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-materia',
  templateUrl: './materia.component.html',
  styleUrls: ['./materia.component.css']
})
export class MateriaComponent implements OnInit {

  tareas = [
    {"id": 1, "titulo": "Analisis del sistema", "estado": "info", "color":"var(--detalle-naranja)"},
    {"id": 2, "titulo": "Crear app angular", "estado": "check_circle", "color":"var(--detalle-verde)"},
    {"id": 3, "titulo": "Desarrollar sistema", "estado": "info", "color":"var(--detalle-naranja)"},
    {"id": 4, "titulo": "Completar carpeta de campo", "estado": "cancel", "color":"var(--detalle-rojo)"},
  ]


  public materia: any;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    let nombre = this.route.snapshot.paramMap.get('nombre');
    this.materia = nombre;
  }

  onClick(tarea: any){
    this.router.navigate(['/curso/', this.materia, tarea.titulo]);
  }

}
