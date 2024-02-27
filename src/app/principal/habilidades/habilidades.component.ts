import { Component, OnInit } from '@angular/core';
import { ISkill, skillsFront, skillsBack } from '../skills';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})

export class HabilidadesComponent implements OnInit {

  skillsFront:ISkill[] = skillsFront;
  skillsBack:ISkill[] = skillsBack;
  
  constructor() { }

  ngOnInit(): void {
  }

}
