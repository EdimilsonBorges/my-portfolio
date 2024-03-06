import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';

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

  setText(value: string ) {
    this.profissionName = this.languageService.textAbout[value].profissionName;
    this.description = this.languageService.textAbout[value].description;
    this.inText = this.languageService.textAbout[value].inText;
    this.live = this.languageService.textAbout[value].live;
    this.age = this.languageService.textAbout[value].age;
    this.gender = this.languageService.textAbout[value].gender;
    this.genderText = this.languageService.textAbout[value].genderText;
  }

}
