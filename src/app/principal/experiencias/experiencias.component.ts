import { Component, OnInit } from '@angular/core';
import { IEducacao, IExperiencia, educacoes, experiencias } from '../educacao-experiencia';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {

  educacoes:IEducacao[] = educacoes;
  experiencias:IExperiencia[] = experiencias;

  constructor() { }

  ngOnInit(): void {
  }

}
