import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.component.html',
  styleUrls: ['./anuncio.component.css']
})
export class AnuncioComponent implements OnInit {

  @Input() contenido: string = 'Actividades normales';
  @Input() color: string = 'red'

  constructor() { }

  ngOnInit(): void {
  }

}
