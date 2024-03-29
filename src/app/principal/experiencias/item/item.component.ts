import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() curso:string = "";
  @Input() empresa:string = "";
  @Input() descricao:string = "";
  @Input() certificate:string = "";
  @Input() certificateName:string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
