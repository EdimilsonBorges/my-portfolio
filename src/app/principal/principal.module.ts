import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ContactComponent } from './contact/contact.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { InicioComponent } from './inicio/inicio.component';
import { MenuComponent } from './menu/menu.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { SobreComponent } from './sobre/sobre.component';
import { PrincipalComponent } from './principal.component';
import { ItemComponent } from './experiencias/item/item.component';
import { SkillComponent } from './habilidades/skill/skill.component';
import { ItemPortifolioComponent } from './portifolio/item-portifolio/item-portifolio.component';
import { ScrollAnimationDirective } from './shared/app.scroll-animation.directive';



@NgModule({
  declarations: [
    ContactComponent,
    ExperienciasComponent,
    HabilidadesComponent,
    InicioComponent,
    MenuComponent,
    PortifolioComponent,
    SobreComponent,
    PrincipalComponent,
    ItemComponent,
    SkillComponent,
    ItemPortifolioComponent,
    ScrollAnimationDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PrincipalModule { }
