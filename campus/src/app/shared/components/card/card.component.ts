import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() materia: string = 'sin definir';
  @Input() profesor: string = 'sin nombre';
  @Input() color: string = 'red'
  @Input() estado: string ='check_circle'

  constructor() { }

  ngOnInit(): void {
  }

}
