import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LangType } from './principal/shared/lang-type.type';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: BehaviorSubject<keyof LangType> = new BehaviorSubject<keyof LangType>("pt-br");
  storageLanguage: keyof LangType;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.storageLanguage = localStorage.getItem("language") as keyof LangType;
    if (this.storageLanguage !== null) {
      this.language.next(this.storageLanguage);
      this.setLanguage(this.storageLanguage);
    } else {
      this.setLanguage(this.language.value);
    }
  }

  setLanguage(lang: keyof LangType) {
    const description = document.querySelector('meta[name="description"]');
    this.renderer.setAttribute(document.documentElement, 'lang', lang);
    this.renderer.setAttribute(description, "content", this.textTags[lang].description);
  }

  textTags:LangType = {
    "pt-br": {
      description: "Sou um desenvolvedor Full Stack apaixonado por criar soluções web. Minhas habilidades incluem a criação de interfaces de usuário responsivas. Estou constantemente atualizando minhas habilidades para me manter atualizado com as tendências tecnológicas, estou ansioso para enfrentar desafios e colaborar em projetos. Minha paixão pelo desenvolvimento web e mobile me impulsiona a buscar soluções criativas e a entregar produtos de alta qualidade que atendam às necessidades dos clientes e dos usuários finais."
    },
    "us": {
      description: "I'm a Full Stack developer passionate about creating web solutions. My skills include creating responsive user interfaces. I am constantly updating my skills to stay up to date with technological trends, I look forward to taking on challenges and collaborating on projects. My passion for web and mobile development drives me to seek creative solutions and deliver high-quality products that meet the needs of customers and end users."
    },
    "es": {
      description: "Soy un desarrollador Full Stack apasionado por la creación de soluciones web. Mis habilidades incluyen la creación de interfaces de usuario responsivas. Estoy constantemente actualizando mis habilidades para estar al día con las tendencias tecnológicas, espero asumir desafíos y colaborar en proyectos. Mi pasión por el desarrollo web y móvil me impulsa a buscar soluciones creativas y ofrecer productos de alta calidad que satisfagan las necesidades de los clientes y usuarios finales."
    }
  }

  textMenu:LangType = {
    "pt-br": {
      menuTitle: "Portifólio",
      linkHome: "Início",
      linkAbout: "Sobre",
      linkSkills: "Habilidades",
      linkProjects: "Projetos",
      linkContact: "Contatos",
      textBtnTitlePT: "Português Brasil",
      textBtnTitleUS: "Inglês",
      textBtnTitleES: "Espanhol"

    },
    "us": {
      menuTitle: "Portifolio",
      linkHome: "Home",
      linkAbout: "About",
      linkSkills: "Skills",
      linkProjects: "Projects",
      linkContact: "Contact",
      textBtnTitlePT: "Portuguese Brazil",
      textBtnTitleUS: "English",
      textBtnTitleES: "Spanish"
    },
    "es": {
      menuTitle: "Portafolio",
      linkHome: "Comenzar",
      linkAbout: "Conóceme",
      linkSkills: "Habilidades",
      linkProjects: "Proyectos",
      linkContact: "Contactos",
      textBtnTitlePT: "Portugués Brasil",
      textBtnTitleUS: "Inglés",
      textBtnTitleES: "Español"
    }
  }

  textAbout:LangType = {
    "pt-br": {
      profissionName: "Desenvolvedor Web Full Stack",
      description: "Sou um desenvolvedor Full Stack apaixonado por criar soluções web. Minhas habilidades incluem a criação de interfaces de usuário responsivas. Estou constantemente atualizando minhas habilidades para me manter atualizado com as tendências tecnológicas, estou ansioso para enfrentar desafios e colaborar em projetos. Minha paixão pelo desenvolvimento web e mobile me impulsiona a buscar soluções criativas e a entregar produtos de alta qualidade que atendam às necessidades dos clientes e dos usuários finais.",

      inText: "De:",
      live: "Mora em:",
      age: "Idade:",
      gender: "Gênero:",

      genderText: "Masculino"
    },
    "us": {
      profissionName: "Full Stack Web Developer",
      description: "I'm a Full Stack developer passionate about creating web solutions. My skills include creating responsive user interfaces. I am constantly updating my skills to stay up to date with technological trends, I look forward to taking on challenges and collaborating on projects. My passion for web and mobile development drives me to seek creative solutions and deliver high-quality products that meet the needs of customers and end users.",

      inText: "In:",
      live: "Live in:",
      age: "Age:",
      gender: "Gender:",

      genderText: "Masculine"
    },
    "es": {
      profissionName: "Desarrollador web full stack",
      description: "Soy un desarrollador Full Stack apasionado por la creación de soluciones web. Mis habilidades incluyen la creación de interfaces de usuario responsivas. Estoy constantemente actualizando mis habilidades para estar al día con las tendencias tecnológicas, espero asumir desafíos y colaborar en proyectos. Mi pasión por el desarrollo web y móvil me impulsa a buscar soluciones creativas y ofrecer productos de alta calidad que satisfagan las necesidades de los clientes y usuarios finales.",

      inText: "En:",
      live: "Vive en:",
      age: "Edad:",
      gender: "Género:",

      genderText: "Masculino"
    }
  }

  textSkills:LangType = {
    "pt-br": {
      skillTitle: "Habilidades Técnicas"
    },
    "us": {
      skillTitle: "Technical skills"
    },
    "es": {
      skillTitle: "Habilidades Técnicas"
    }
  }
  textPortifolio:any = {
    "pt-br": {
      spanText: "Portifólio",
      titlePortifolio: "Veja meu trabalho",
    },
    "us": {
      spanText: "Portfolio",
      titlePortifolio: "See my work",
    },

    "es": {
      spanText: "Portafolio",
      titlePortifolio: "Ver mi trabajo",
    }
  }

  textExperiencias:LangType = {
    "pt-br": {
      titleEducation: "Educação",
      titleExperience: "Experiência",
      certificateName: "Certificado"
    },
    "us": {
      titleEducation: "Education",
      titleExperience: "Experience",
      certificateName: "Certificate"
    },

    "es": {
      titleEducation: "Educación",
      titleExperience: "Experiencia",
      certificateName: "Certificado"
    }
  }
}