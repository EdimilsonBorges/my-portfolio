import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { LangType } from '../../shared/lang-type.type';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {

  titleName: string = "Edimilson Borges";
  profissionName: string = "";
  description: string = "";

  inText: string = "";
  live: string = "";
  age: string = "";
  gender: string = "";

  city: string = "São José do Piauí, PI, BR";
  liveText: string = "São José do Piauí, PI, BR";
  ageText: string = "34";
  genderText: string = "";

  constructor(private languageService: LanguageService) {
    languageService.language.subscribe((value) => {
      this.setText(value);
    });
  }

  setText(value: keyof LangType) {
    this.profissionName = this.languageService.texts[value].about.profissionName;
    this.description = this.languageService.texts[value].about.description;
    this.inText = this.languageService.texts[value].about.inText;
    this.live = this.languageService.texts[value].about.live;
    this.age = this.languageService.texts[value].about.age;
    this.gender = this.languageService.texts[value].about.gender;
    this.genderText = this.languageService.texts[value].about.genderText;
  }

}
