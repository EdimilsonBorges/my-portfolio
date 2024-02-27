import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navExpandida: boolean = false;
  ultimoElementoClicado: HTMLElement | null = null;
  @ViewChild('inicio', {static: true}) inicio!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu(){
    this.navExpandida = !this.navExpandida;
  }

  clicado(event: MouseEvent):void{
    this.inicio.nativeElement.style.color = '';
    const novoElementoClicado = event.target as HTMLElement;
    if (this.ultimoElementoClicado) {
      this.ultimoElementoClicado.style.color = ''; 
    }

    novoElementoClicado.style.color = '#fff'; 
    this.ultimoElementoClicado = novoElementoClicado;
  }
}
