import { Component, ViewChild, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  navExpandida: boolean = false;
  ultimoElementoClicado: HTMLElement | null = null;
  @ViewChild('inicio', {static: true}) inicio!: ElementRef;
  @Input() language:string = "ptbr";

  text:any = {
    ptbr: {
      menuTitle: "Portifólio",
      linkHome: "Início",
      linkAbout: "Sobre",
      linkSkills: "Habilidades",
      linkProjects: "Projetos",
      linkContact:"Contatos"

    },
    us:{
      menuTitle: "Portifolio",
      linkHome: "Home",
      linkAbout: "About",
      linkSkills: "Skills",
      linkProjects: "Projects",
      linkContact:"Contact"
    }
  };

  menuTitle:string = "";
  linkHome:string = "";
  linkAbout:string = "";
  linkSkills:string = "";
  linkProjects:string = "";
  linkContact:string = "";


  constructor() { 
  }

  ngOnInit(): void {
    this.setText();
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

  setText(){
    this.menuTitle = this.text[this.language].menuTitle;
    this.linkHome = this.text[this.language].linkHome;
    this.linkAbout = this.text[this.language].linkAbout;
    this.linkSkills = this.text[this.language].linkSkills;
    this.linkProjects = this.text[this.language].linkProjects;
    this.linkContact = this.text[this.language].linkContact;
  }
}
