import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-portifolio',
  templateUrl: './item-portifolio.component.html',
  styleUrls: ['./item-portifolio.component.css']
})
export class ItemPortifolioComponent{

  @Input() imagem:string = "";
  @Input() titulo:string = "";
  @Input() descricao:string = "";
  @Input() linkVer:string = "";
  @Input() linkVis:string = "";
  @Input() txtVer:string = "";
  @Input() txtVis:string = "";

  constructor() { }


}
