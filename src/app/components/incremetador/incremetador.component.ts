import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incremetador',
  templateUrl: './incremetador.component.html',
  styles: [
  ]
})
export class IncremetadorComponent implements OnInit {

  // Hace referencia a un elemento Html en Particular con #nombrexx en el html
  @ViewChild('txtProgress') txtProgress: ElementRef;
  // Recibir Datos
  @Input('nombre')  leyenda: string = 'Leyenda';
  @Input()  progreso: number = 50;
  // Emitir Datos
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onChange( newValue: number ){

    // let elemHTML: any = document.getElementsByName('progreso')[0];

    // console.log(newValue);
    if ( newValue >= 100 ){
      this.progreso = 100;
    }else if ( newValue <= 0 ){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }

    // elemHTML.value = this.progreso;
    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( valor: number ){

    if ( this.progreso >= 100 && valor > 0 ){
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0 ){
      this.progreso = 0;
      return;
    }

    this.progreso += valor;
    // Emitir Cambio de Valor
    this.cambioValor.emit( this.progreso );
    // Colocar el Foco en el Control
    this.txtProgress.nativeElement.focus();

  }

}
