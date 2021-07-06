import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent implements OnInit {

  public tarea: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let nombre = this.route.snapshot.paramMap.get('id');
    this.tarea = nombre;
  }

}
