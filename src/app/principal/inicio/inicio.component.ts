import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        style({opacity:0}),
        animate(1000, style({opacity:1}))
      ])
    ])
  ]
})
export class InicioComponent {

  welcome: string = "";
  preTitle: string = "";
  posTitle: string = "";

  constructor(protected languageService:LanguageService) {
    languageService.language.subscribe(value => {
      this.setText();
    });
  }

  private setText() {
    this.welcome = this.text[this.languageService.language.value].welcome;
    this.preTitle = this.text[this.languageService.language.value].preTitle;
    this.posTitle = this.text[this.languageService.language.value].posTitle;
  }

  text: any = {
    "pt-br": {
      welcome: "Seja bem-vindo!",
      preTitle: "Eu Sou",
      posTitle: "Desenvolvedor Full Stack"

    },
    "us": {
      welcome: "Welcome!",
      preTitle: "I am",
      posTitle: "Full Stack Developer"
    },
    "es": {
      welcome: "¡Sea bienvenido!",
      preTitle: "Soy",
      posTitle: "Desarrollador web full stack"
    }
  }
}
