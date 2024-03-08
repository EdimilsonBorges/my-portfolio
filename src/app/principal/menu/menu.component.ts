import { Component, ViewChild, ElementRef } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { LangType } from '../../shared/lang-type.type';
import { ScrollViewService } from 'src/app/services/scroll-view.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  navExpandida: boolean = false;
  click: boolean = false;
  classActive: string = "";

  menuTitle: string = "";
  linkHome: string = "";
  linkAbout: string = "";
  linkSkills: string = "";
  linkProjects: string = "";
  linkContact: string = "";
  textBtnTitlePT: string = "";
  textBtnTitleUS: string = "";
  textBtnTitleES: string = "";


  constructor(protected languageService: LanguageService, scrollViewService: ScrollViewService) {
    languageService.language.subscribe(value => {
      this.setText(value);
      languageService.setLanguage(value);
    });
    scrollViewService.classMenu.subscribe(value => this.classActive = value);
  }

  protected mostrarMenu() {
    this.navExpandida = !this.navExpandida;
  }

  private setText(value: keyof LangType) {
    this.menuTitle = this.languageService.texts[value].menu.menuTitle;
    this.linkHome = this.languageService.texts[value].menu.linkHome;
    this.linkAbout = this.languageService.texts[value].menu.linkAbout;
    this.linkSkills = this.languageService.texts[value].menu.linkSkills;
    this.linkProjects = this.languageService.texts[value].menu.linkProjects;
    this.linkContact = this.languageService.texts[value].menu.linkContact;
    this.textBtnTitlePT = this.languageService.texts[value].menu.textBtnTitlePT;
    this.textBtnTitleUS = this.languageService.texts[value].menu.textBtnTitleUS;
    this.textBtnTitleES = this.languageService.texts[value].menu.textBtnTitleES;
  }

  protected selectLanguage(element: HTMLDivElement) {
    this.click = !this.click;
    
    if (this.languageService.language.value !== element.id) {
      if (element.id === "pt-BR") {
        this.languageService.language.next("pt-BR");
        localStorage.setItem("language", "pt-BR");
      } else if (element.id === "es") {
        this.languageService.language.next("es");
        localStorage.setItem("language", "es");
      } else {
        this.languageService.language.next("en-US");
        localStorage.setItem("language", "en-US");
      }
    }
  }
}
