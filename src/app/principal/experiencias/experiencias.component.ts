import { Component } from '@angular/core';
import { IEducacaoItem, IExperienciaItem } from '../../shared/educacao-experiencia';
import { LanguageService } from 'src/app/services/language.service';
import { LangType } from 'src/app/shared/lang-type.type';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  educacoesItem: IEducacaoItem[] = [];
  experienciasItem: IExperienciaItem[] = [];
  titleEducation: string = "";
  titleExperience: string = "";
  certificateName: string = "";

  constructor(private languageService: LanguageService) {
    languageService.language.subscribe((value) => {
       this.setText(value);
    });
  }

  setText(value: keyof LangType) {
    this.titleEducation = this.languageService.texts[value].experiencias.titleEducation;
    this.titleExperience = this.languageService.texts[value].experiencias.titleExperience;
    this.certificateName = this.languageService.texts[value].experiencias.certificateName;
    this.experienciasItem = this.languageService.texts[value].experienciaItems;
    this.educacoesItem = this.languageService.texts[value].educacoesItems;
  }

}
