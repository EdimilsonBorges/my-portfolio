import { Component } from '@angular/core';
import { LanguageService } from 'src/app/language.service';
import { IPortifolio, portifolios } from '../protifolios';

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

  setText(value: string) {
    this.spanText = this.languageService.textPortifolio[value].spanText;
    this.titlePortifolio = this.languageService.textPortifolio[value].titlePortifolio;
  }

}
