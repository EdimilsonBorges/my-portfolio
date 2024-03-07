import { Component } from '@angular/core';
import { ISkill, skillsFront, skillsBack } from '../skills';
import { LanguageService } from 'src/app/language.service';
import { LangType } from '../shared/lang-type.type';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent {

  skillsFront:ISkill[] = skillsFront;
  skillsBack:ISkill[] = skillsBack;
  skillTitle:string = "";
  
  constructor(private languageService: LanguageService) {
    languageService.language.subscribe((value)=>{
      this.setText(value);
    });
   }
   setText(value: keyof LangType) {
    this.skillTitle = this.languageService.textSkills[value].skillTitle;
  }
}


