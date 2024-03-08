import { animate, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { LangType } from 'src/app/shared/lang-type.type';

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
      this.setText(value);
    });
  }

  private setText(value: keyof LangType) {
    this.welcome = this.languageService.texts[value].inicio.welcome;
    this.preTitle = this.languageService.texts[value].inicio.preTitle;
    this.posTitle = this.languageService.texts[value].inicio.posTitle;
  }

}
