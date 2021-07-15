import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-cuota',
  templateUrl: './card-cuota.component.html',
  styleUrls: ['./card-cuota.component.css']
})

export class CardCuotaComponent implements OnInit {

  @Input() tituloCuota: string = 'Cuota'
  @Input() vencimiento: string = 'Sin fecha de vencimiento'
  @Input() color: string = 'var(--detalle-verde)'
  @Input() estado: string ='check_circle'

  constructor() { }

  ngOnInit(): void {
  }

}
