import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language.service';
import { LangType } from 'src/app/shared/lang-type.type';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  titleContacts: string = "";
  titleAddress: string = "";
  titleSocials: string = "";
  titleContact: string = "";
  textAddress: string = "";
  textSocials: any;
  textContacts: any;
  textFooter: any;


  constructor(private languageService: LanguageService) {
    languageService.language.subscribe(value => this.setText(value));
  }

  setText(value: keyof LangType){
    this.titleContacts = this.languageService.texts[value].contact.titleContacts;
    this.titleAddress = this.languageService.texts[value].contact.titleAddress;
    this.titleSocials = this.languageService.texts[value].contact.titleSocials;
    this.titleContact = this.languageService.texts[value].contact.titleContact;
    this.textFooter = this.languageService.texts[value].contact.textFooter;
    this.textAddress = this.languageService.texts[value].contact.textAddress;
    this.textSocials = this.languageService.texts[value].contact.textSocials;
    this.textContacts = this.languageService.texts[value].contact.textContacts;
  }

}
