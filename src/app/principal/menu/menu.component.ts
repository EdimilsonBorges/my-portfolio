import { Component, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  navExpandida: boolean = false;
  ultimoElementoClicado: HTMLElement | null = null;
  @ViewChild('inicio', { static: true }) inicio!: ElementRef;
  click: boolean = false;

  menuTitle: string = "";
  linkHome: string = "";
  linkAbout: string = "";
  linkSkills: string = "";
  linkProjects: string = "";
  linkContact: string = "";
  textBtnTitlePT: string = "";
  textBtnTitleUS: string = "";
  textBtnTitleES: string = "";


  constructor(protected languageService: LanguageService) {
    languageService.language.subscribe(value => {
      this.setText();
      languageService.setLanguage(value);
    });
  }

  protected mostrarMenu() {
    this.navExpandida = !this.navExpandida;
  }

  protected clicado(event: MouseEvent): void {
    this.inicio.nativeElement.style.color = '';
    const novoElementoClicado = event.target as HTMLElement;
    if (this.ultimoElementoClicado) {
      this.ultimoElementoClicado.style.color = '';
    }

    novoElementoClicado.style.color = '#fff';
    this.ultimoElementoClicado = novoElementoClicado;
  }

  private setText() {
    this.menuTitle = this.text[this.languageService.language.value].menuTitle;
    this.linkHome = this.text[this.languageService.language.value].linkHome;
    this.linkAbout = this.text[this.languageService.language.value].linkAbout;
    this.linkSkills = this.text[this.languageService.language.value].linkSkills;
    this.linkProjects = this.text[this.languageService.language.value].linkProjects;
    this.linkContact = this.text[this.languageService.language.value].linkContact;
    this.textBtnTitlePT = this.text[this.languageService.language.value].textBtnTitlePT;
    this.textBtnTitleUS = this.text[this.languageService.language.value].textBtnTitleUS;
    this.textBtnTitleES = this.text[this.languageService.language.value].textBtnTitleES;
  }

  protected selectLanguage(element: HTMLDivElement) {
    
    if (this.languageService.language.value !== element.id) {
      if (element.id === "pt-br") {
        this.languageService.language.next("pt-br");
        localStorage.setItem("language", "pt-br");
      } else if (element.id === "es") {
        this.languageService.language.next("es");
        localStorage.setItem("language", "es");
      } else {
        this.languageService.language.next("us");
        localStorage.setItem("language", "us");
      }
    }
    this.click = !this.click;
  }

  text: any = {
    "pt-br": {
      menuTitle: "Portifólio",
      linkHome: "Início",
      linkAbout: "Sobre",
      linkSkills: "Habilidades",
      linkProjects: "Projetos",
      linkContact: "Contatos",
      textBtnTitlePT: "Português Brasil",
      textBtnTitleUS: "Inglês",
      textBtnTitleES: "Espanhol"

    },
    "us": {
      menuTitle: "Portifolio",
      linkHome: "Home",
      linkAbout: "About",
      linkSkills: "Skills",
      linkProjects: "Projects",
      linkContact: "Contact",
      textBtnTitlePT: "Portuguese Brazil",
      textBtnTitleUS: "English",
      textBtnTitleES: "Spanish"
    },
    "es": {
      menuTitle: "Portafolio",
      linkHome: "Comenzar",
      linkAbout: "Acerca de",
      linkSkills: "Habilidades",
      linkProjects: "Proyectos",
      linkContact: "Contactos",
      textBtnTitlePT: "Portugués Brasil",
      textBtnTitleUS: "Inglés",
      textBtnTitleES: "Español"
    }
  }
}
