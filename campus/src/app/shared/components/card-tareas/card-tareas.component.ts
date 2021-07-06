import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-tareas',
  templateUrl: './card-tareas.component.html',
  styleUrls: ['./card-tareas.component.css']
})
export class CardTareasComponent implements OnInit {

  @Input() nombreTarea: string = 'Tarea'
  @Input() fechaEntrega: string = 'Sin fecha de entrega'
  @Input() color: string = 'var(--detalle-verde)'
  @Input() estado: string ='check_circle'

  constructor() { }

  ngOnInit(): void {
  }

}
