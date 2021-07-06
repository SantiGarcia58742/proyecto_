import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { dialogAnuncio } from '../../../../shared/components/content-anuncio/content-dialog.component'

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  materias = [
    {"id": 1, "nombre": "Programación sobre Redes", "color":"#FF7F50", "estado":"info"},
    {"id": 2, "nombre": "Desarrollo de Sistemas", "color":"#00B894", "estado":"check_circle"},
    {"id": 3, "nombre": "Practicas Profesionalizantes", "color":"#FF7F50", "estado":"info"},
    {"id": 4, "nombre": "Educación Fisica", "color":"#FF7F50", "estado":"info"},
    {"id": 5, "nombre": "Inglés", "color":"#F05454", "estado":"cancel"},
  ]

  constructor(public dialog: MatDialog, private router: Router) { }

  
  openDialog(){
    this.dialog.open(dialogAnuncio)
  }

  ngOnInit(): void {
  }

  onClick(materia: any){
    this.router.navigate(['/curso', materia.nombre]);
  }

}
