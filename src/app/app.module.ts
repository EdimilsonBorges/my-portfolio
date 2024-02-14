import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SobreComponent } from './sobre/sobre.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { SkillComponent } from './habilidades/skill/skill.component';
import { ExperienciasComponent } from './experiencias/experiencias.component';
import { ItemComponent } from './experiencias/item/item.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { ItemPortifolioComponent } from './portifolio/item-portifolio/item-portifolio.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SobreComponent,
    HabilidadesComponent,
    SkillComponent,
    ExperienciasComponent,
    ItemComponent,
    PortifolioComponent,
    ItemPortifolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
