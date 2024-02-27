import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-portifolio',
  templateUrl: './item-portifolio.component.html',
  styleUrls: ['./item-portifolio.component.css']
})
export class ItemPortifolioComponent implements OnInit {

  @Input() imagem:string = "";
  @Input() titulo:string = "";
  @Input() descricao:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
