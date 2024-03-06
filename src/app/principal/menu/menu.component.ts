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
      this.setText(value);
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

  private setText(value:string) {
    this.menuTitle = this.languageService.textMenu[value].menuTitle;
    this.linkHome = this.languageService.textMenu[value].linkHome;
    this.linkAbout = this.languageService.textMenu[value].linkAbout;
    this.linkSkills = this.languageService.textMenu[value].linkSkills;
    this.linkProjects = this.languageService.textMenu[value].linkProjects;
    this.linkContact = this.languageService.textMenu[value].linkContact;
    this.textBtnTitlePT = this.languageService.textMenu[value].textBtnTitlePT;
    this.textBtnTitleUS = this.languageService.textMenu[value].textBtnTitleUS;
    this.textBtnTitleES = this.languageService.textMenu[this.languageService.language.value].textBtnTitleES;
  }

  protected selectLanguage(element: HTMLDivElement) {
    this.click = !this.click;
    
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
  }
}
