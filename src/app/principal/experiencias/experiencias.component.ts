import { Component } from '@angular/core';
import { IEducacao, IEducacaoItem, IExperiencia, IExperienciaItem, educacoes, experiencias } from '../educacao-experiencia';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent {

  educacoes: IEducacao = educacoes;
  experiencias: IExperiencia = experiencias;
  educacoesItem:IEducacaoItem[] = [];
  experienciasItem:IExperienciaItem[] = [];
  titleEducation: string = "";
  titleExperience: string = "";
  certificateName:string = "Certificado";

  constructor(private languageService: LanguageService) {
    languageService.language.subscribe((value) => {
      const lang: keyof IEducacao = value as keyof IEducacao
      this.setText(lang);
    });
  }

  setText(value: keyof IEducacao) {
    this.titleEducation = this.languageService.textExperiencias[value].titleEducation;
    this.titleExperience = this.languageService.textExperiencias[value].titleExperience;
    this.certificateName = this.languageService.textExperiencias[value].certificateName;
    this.educacoesItem = this.educacoes[value];
    this.experienciasItem = this.experiencias[value];
    
  }

}
