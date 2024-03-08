import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { IPortifolio, portifolios } from '../../shared/protifolios';
import { LangType } from 'src/app/shared/lang-type.type';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent {

  portifolios: IPortifolio[] = portifolios;
  spanText: string = "";
  titlePortifolio: string = "";

  constructor(private languageService: LanguageService) {
    languageService.language.subscribe((value) => {
      this.setText(value);
    });
  }

  setText(value: keyof LangType) {
    this.spanText = this.languageService.texts[value].portifolio.spanText;
    this.titlePortifolio = this.languageService.texts[value].portifolio.titlePortifolio;
  }

}
