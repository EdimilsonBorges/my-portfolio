import { Component, OnInit } from '@angular/core';
import { IPortifolio, portifolios } from '../protifolios';

@Component({
  selector: 'app-portifolio',
  templateUrl: './portifolio.component.html',
  styleUrls: ['./portifolio.component.css']
})
export class PortifolioComponent implements OnInit {

  portifolios:IPortifolio[] = portifolios;

  constructor() { }

  ngOnInit(): void {
  }

}
