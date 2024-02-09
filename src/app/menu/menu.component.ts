import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  navExpandida: boolean = false;

  ngOnInit(): void {
  }

  mostrarMenu(){
    this.navExpandida = !this.navExpandida;
  }

}
