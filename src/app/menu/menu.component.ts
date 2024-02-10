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

  isSectionActive(id: string): boolean {
    const section = document.getElementById(id);
    if (section) {
      const rect = section.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  }

}
