import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LangType } from '../shared/lang-type.type';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  language: BehaviorSubject<keyof LangType> = new BehaviorSubject<keyof LangType>("pt-BR");
  storageLanguage: keyof LangType;
  private renderer: Renderer2;

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.storageLanguage = localStorage.getItem("language") as keyof LangType;
    if (this.storageLanguage !== null) {
      this.language.next(this.storageLanguage);
    } else {
      this.storageLanguage = this.language.value
    }
    this.setLanguage(this.storageLanguage);
  }

  setLanguage(lang: keyof LangType) {
    const description = document.querySelector('meta[name="description"]');
    this.renderer.setAttribute(document.documentElement, 'lang', lang);
    this.renderer.setAttribute(description, "content", this.texts[lang].tags.description);
  }

  texts: LangType = {
    "pt-BR":
    {
      tags: {
        description: "Sou um desenvolvedor Full Stack apaixonado por criar soluções web. Minhas habilidades incluem a criação de interfaces de usuário responsivas. Estou constantemente atualizando minhas habilidades para me manter atualizado com as tendências tecnológicas, estou ansioso para enfrentar desafios e colaborar em projetos. Minha paixão pelo desenvolvimento web e mobile me impulsiona a buscar soluções criativas e a entregar produtos de alta qualidade que atendam às necessidades dos clientes e dos usuários finais."
      },
      menu: {
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
      inicio: {
        welcome: "Seja bem-vindo!",
        preTitle: "Eu Sou",
        posTitle: "Desenvolvedor Full Stack"
      },
      about: {
        profissionName: "Desenvolvedor Web Full Stack",
        description: "Sou um desenvolvedor Full Stack apaixonado por criar soluções web. Minhas habilidades incluem a criação de interfaces de usuário responsivas. Estou constantemente atualizando minhas habilidades para me manter atualizado com as tendências tecnológicas, estou ansioso para enfrentar desafios e colaborar em projetos. Minha paixão pelo desenvolvimento web e mobile me impulsiona a buscar soluções criativas e a entregar produtos de alta qualidade que atendam às necessidades dos clientes e dos usuários finais.",
        inText: "De:",
        live: "Mora em:",
        age: "Idade:",
        gender: "Gênero:",
        genderText: "Masculino"
      },
      skills: {
        skillTitle: "Habilidades Técnicas"
      },
      portifolio: {
        spanText: "Portifólio",
        titlePortifolio: "Veja meu trabalho",
      },
      experiencias: {
        titleEducation: "Educação",
        titleExperience: "Experiência",
        certificateName: "Certificado"
      },
      experienciaItems: [{
        ano: "2023",
        curso: "Espaço para mim e para todos: Lutas e questões de gênero.",
        empresa: "Mambee",
        descricao: "É um projeto comunitário que oferece uma perspectiva abrangente sobre as lutas e as relações de gênero, buscando introduzir e discutir esses temas no contexto da Educação Física Escolar. Propostos por meio de debates, encontros, experiências práticas e oportunidades que permitem uma compreensão mais ampla das Lutas, especialmente na forma como se relacionam com questões de gênero na escola."
      }],
      educacoesItems: [
        {
          ano: "2023",
          curso: "Desenvolvimento de Jogos",
          empresa: "Potência Tech iFood",
          descricao: "Foram 77 horas de aprendizado. Este bootcamp incluiu o desenvolvimento inicial de jogos utilizando JavaScript, os princípios fundamentais desse processo a partir de uma perspectiva de mercado e carreira. Conceitos como variáveis, escopo, tipos de dados, orientação a protótipo, funções e manipulação de listas e treino em projetos práticos ao longo do bootcamp, desenvolvendo os próprios jogos e compreendendo os fundamentos de uma carreira nessa área.",
          linkCertificado: "https://www.dio.me/certificate/98723684/share"
        },
        {
          ano: "2023",
          curso: "Bootcamp - Fullstack Java+Angular",
          empresa: "Santander Universidades",
          descricao: "Foram 115 horas de aprendizado neste bootcamp. O bootcamp concluiu desde os conceitos iniciais até tópicos avançados em desenvolvimento web, JavaScript, Angular, Java, bancos de dados relacionais e não relacionais, APIs REST e Spring Framework, visando aumentar a produtividade na criação de aplicativos web modernos e escaláveis.",
          linkCertificado: "https://www.dio.me/certificate/CA437454/share"
        },
        {
          ano: "2021",
          curso: "Curso de PHP Orientado a Objetos",
          empresa: "Celke",
          descricao: "Foram 70 horas de aprendizado neste curso. O curso abordou os conceitos fundamentais de programação orientada a objetos (POO) utilizando PHP. Os tópicos incluiram: Introdução aos princípios de POO. Criação de classes e objetos em PHP. Encapsulamento, herança e polimorfismo. Organização de código com namespaces. Tratamento de exceções. Desenvolvimento de aplicações práticas. Boas práticas, padrões de codificação banco de dados MYSQL e muito mais. O curso ofereceu uma combinação de teoria e prática, com exemplos e exercícios para consolidar o aprendizado dos alunos.",
          linkCertificado: "https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link"
        }
      ],
      contact: {
        titleContacts: "Contatos",
        titleAddress: "Onde me encontrar",
        titleSocials: "Me siga",
        titleContact: "Contate-me",
        textAddress: "São José do Piauí - PI, Brasil",
        textSocials: [
          {
            link: "https://www.linkedin.com/in/edimilson-borges/",
            text: "Linkedin"
          },
          {
            link: "https://github.com/EdimilsonBorges/",
            text: "GitHub"
          },
          {
            link: "https://api.whatsapp.com/send?phone=5589981125275&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20seu%20portif%C3%B3lio%20e%20queria...",
            text: "WhatsApp"
          }
        ],

        textContacts: [
          {
            link: "mailto:edimilsonborges159@gmail.com",
            text: "edimilsonborges159@gmail.com"
          },
          {
            link: "tel:5589981125275",
            text: "+55 (89) 98112-5275"
          },
        ],
        textFooter: {
          link: "https://www.linkedin.com/in/edimilson-borges/",
          text: "Copyright © 2024. Todos os direitos reservados | Desenvolvido por",
          name: "Edimilson Borges"
        }
      }
    },
    "en-US":
    {
      tags: {
        description: "I'm a Full Stack developer passionate about creating web solutions. My skills include creating responsive user interfaces. I am constantly updating my skills to stay up to date with technological trends, I look forward to taking on challenges and collaborating on projects. My passion for web and mobile development drives me to seek creative solutions and deliver high-quality products that meet the needs of customers and end users."
      },
      menu: {
        menuTitle: "Portfolio",
        linkHome: "Home",
        linkAbout: "About",
        linkSkills: "Skills",
        linkProjects: "Projects",
        linkContact: "Contact",
        textBtnTitlePT: "Portuguese Brazil",
        textBtnTitleUS: "English",
        textBtnTitleES: "Spanish"
      },
      inicio: {
        welcome: "Welcome!",
        preTitle: "I am",
        posTitle: "Full Stack Developer"
      },
      about: {
        profissionName: "Full Stack Web Developer",
        description: "I'm a Full Stack developer passionate about creating web solutions. My skills include creating responsive user interfaces. I am constantly updating my skills to stay up to date with technological trends, I look forward to taking on challenges and collaborating on projects. My passion for web and mobile development drives me to seek creative solutions and deliver high-quality products that meet the needs of customers and end users.",
        inText: "In:",
        live: "Live in:",
        age: "Age:",
        gender: "Gender:",
        genderText: "Masculine"
      },
      skills: {
        skillTitle: "Technical skills"
      },
      portifolio: {
        spanText: "Portfolio",
        titlePortifolio: "See my work",
      },
      experiencias: {
        titleEducation: "Education",
        titleExperience: "Experience",
        certificateName: "Certificate"
      },
      experienciaItems: [{
        ano: "2023",
        curso: "Espaço para mim e para todos: Lutas e questões de gênero.",
        empresa: "Mambee",
        descricao: "It is a community project that offers a comprehensive perspective on gender struggles and relations, seeking to introduce and discuss these themes in the context of School Physical Education. Proposed through debates, meetings, practical experiences and opportunities that allow a broader understanding of the Struggles, especially as they relate to gender issues at school."
      }],
      educacoesItems: [
        {
          ano: "2023",
          curso: "Game Development",
          empresa: "Potência Tech iFood",
          descricao: "There were 77 hours of learning. This bootcamp included initial game development using JavaScript, the fundamental principles of this process from a market and career perspective. Concepts such as variables, scope, data types, prototype orientation, functions and list manipulation and training in practical projects throughout the bootcamp, developing your own games and understanding the fundamentals of a career in this area.",
          linkCertificado: "https://www.dio.me/certificate/98723684/share"
        },
        {
          ano: "2023",
          curso: "Bootcamp - Fullstack Java+Angular",
          empresa: "Santander Universidades",
          descricao: "There were 115 hours of learning in this bootcamp. The bootcamp ranged from initial concepts to advanced topics in web development, JavaScript, Angular, Java, relational and non-relational databases, REST APIs and Spring Framework, aiming to increase productivity in creating modern and scalable web applications.",
          linkCertificado: "https://www.dio.me/certificate/CA437454/share"
        },
        {
          ano: "2021",
          curso: "Object Oriented PHP Course",
          empresa: "Celke",
          descricao: "There were 70 hours of learning in this course. The course covered the fundamental concepts of object-oriented programming (OOP) using PHP. Topics included: Introduction to OOP principles. Creation of classes and objects in PHP. Encapsulation, inheritance and polymorphism. Organization of code with namespaces. Exception handling. Development of practical applications. Good practices, MYSQL database coding standards and much more. The course offered a combination of theory and practice, with examples and exercises to consolidate students' learning.",
          linkCertificado: "https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link"
        }
      ],
      contact: {
        titleContacts: "Contacts",
        titleAddress: "Where to find me",
        titleSocials: "Follow me",
        titleContact: "Contact me",
        textAddress: "São José do Piauí - PI, Brazil",
        textSocials: [
          {
            link: "https://www.linkedin.com/in/edimilson-borges/",
            text: "Linkedin"
          },
          {
            link: "https://github.com/EdimilsonBorges/",
            text: "GitHub"
          },
          {
            link: "https://api.whatsapp.com/send?phone=5589981125275&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20seu%20portif%C3%B3lio%20e%20queria...",
            text: "WhatsApp"
          }
        ],

        textContacts: [
          {
            link: "mailto:edimilsonborges159@gmail.com",
            text: "edimilsonborges159@gmail.com"
          },
          {
            link: "tel:5589981125275",
            text: "+55 (89) 98112-5275"
          },
        ],
        textFooter: {
          link: "https://www.linkedin.com/in/edimilson-borges/",
          text: "Copyright © 2024. All rights reserved | Developed by",
          name: "Edimilson Borges"
        }
      }
    },
    "es":
    {
      tags: {
        description: "Soy un desarrollador Full Stack apasionado por la creación de soluciones web. Mis habilidades incluyen la creación de interfaces de usuario responsivas. Estoy constantemente actualizando mis habilidades para estar al día con las tendencias tecnológicas, espero asumir desafíos y colaborar en proyectos. Mi pasión por el desarrollo web y móvil me impulsa a buscar soluciones creativas y ofrecer productos de alta calidad que satisfagan las necesidades de los clientes y usuarios finales."
      },
      menu: {
        menuTitle: "Portafolio",
        linkHome: "Comenzar",
        linkAbout: "Conóceme",
        linkSkills: "Habilidades",
        linkProjects: "Proyectos",
        linkContact: "Contactos",
        textBtnTitlePT: "Portugués Brasil",
        textBtnTitleUS: "Inglés",
        textBtnTitleES: "Español"
      },
      inicio: {
        welcome: "¡Sea bienvenido!",
        preTitle: "Soy",
        posTitle: "Desarrollador web full stack"
      },
      about: {
        profissionName: "Desarrollador web full stack",
        description: "Soy un desarrollador Full Stack apasionado por la creación de soluciones web. Mis habilidades incluyen la creación de interfaces de usuario responsivas. Estoy constantemente actualizando mis habilidades para estar al día con las tendencias tecnológicas, espero asumir desafíos y colaborar en proyectos. Mi pasión por el desarrollo web y móvil me impulsa a buscar soluciones creativas y ofrecer productos de alta calidad que satisfagan las necesidades de los clientes y usuarios finales.",
        inText: "En:",
        live: "Vive en:",
        age: "Edad:",
        gender: "Género:",
        genderText: "Masculino"
      },
      skills: {
        skillTitle: "Habilidades Técnicas"
      },
      portifolio: {
        spanText: "Portafolio",
        titlePortifolio: "Ver mi trabajo",
      },
      experiencias: {
        titleEducation: "Educación",
        titleExperience: "Experiencia",
        certificateName: "Certificado"
      },
      experienciaItems: [
        {
          ano: "2023",
          curso: "Espaço para mim e para todos: Lutas e questões de gênero.",
          empresa: "Mambee",
          descricao: "Es un proyecto comunitario que ofrece una perspectiva integral sobre las luchas y relaciones de género, buscando introducir y discutir estos temas en el contexto de la Educación Física Escolar. Propuestas a través de debates, encuentros, experiencias prácticas y oportunidades que permitan una comprensión más amplia de las Luchas, especialmente en lo que se refiere a cuestiones de género en la escuela."
        }
      ],
      educacoesItems: [
        {
          ano: "2023",
          curso: "Desarrollo de juegos",
          empresa: "Potência Tech iFood",
          descricao: "Fueron 77 horas de aprendizaje. Este bootcamp incluyó el desarrollo inicial de juegos utilizando JavaScript, los principios fundamentales de este proceso desde una perspectiva de mercado y profesional. Conceptos como variables, alcance, tipos de datos, orientación de prototipos, funciones y manipulación de listas y capacitación en proyectos prácticos a lo largo del bootcamp, desarrollando tus propios juegos y entendiendo los fundamentos de una carrera en esta área.",
          linkCertificado: "https://www.dio.me/certificate/98723684/share"
        },
        {
          ano: "2023",
          curso: "Bootcamp - Fullstack Java+Angular",
          empresa: "Santander Universidades",
          descricao: "Hubo 115 horas de aprendizaje en este bootcamp. El bootcamp abarcó desde conceptos iniciales hasta temas avanzados en desarrollo web, JavaScript, Angular, Java, bases de datos relacionales y no relacionales, API REST y Spring Framework, con el objetivo de aumentar la productividad en la creación de aplicaciones web modernas y escalables.", linkCertificado: "https://www.dio.me/certificate/CA437454/share"
        },
        {
          ano: "2021",
          curso: "Curso de PHP Orientado a Objetos",
          empresa: "Celke",
          descricao: "Fueron 70 horas de aprendizaje en este curso. El curso cubrió los conceptos fundamentales de la programación orientada a objetos (OOP) usando PHP. Temas incluidos: Introducción a los principios de la programación orientada a objetos. Creación de clases y objetos en PHP. Encapsulación, herencia y polimorfismo. Organización del código con espacios de nombres. Manejo de excepciones. Desarrollo de aplicaciones prácticas. Buenas prácticas, estándares de codificación de bases de datos MYSQL y mucho más. El curso ofreció una combinación de teoría y práctica, con ejemplos y ejercicios para consolidar el aprendizaje de los estudiantes.",
          linkCertificado: "https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link"
        }
      ],
      contact: {
        titleContacts: "Contactos",
        titleAddress: "Donde encontrarme",
        titleSocials: "Seguime",
        titleContact: "Contáctame",
        textAddress: "São José do Piauí - PI, Brasil",
        textSocials: [
          {
            link: "https://www.linkedin.com/in/edimilson-borges/",
            text: "Linkedin"
          },
          {
            link: "https://github.com/EdimilsonBorges/",
            text: "GitHub"
          },
          {
            link: "https://api.whatsapp.com/send?phone=5589981125275&text=Ol%C3%A1,%20estou%20entrando%20em%20contato%20pelo%20seu%20portif%C3%B3lio%20e%20queria...",
            text: "WhatsApp"
          }
        ],

        textContacts: [
          {
            link: "mailto:edimilsonborges159@gmail.com",
            text: "edimilsonborges159@gmail.com"
          },
          {
            link: "tel:5589981125275",
            text: "+55 (89) 98112-5275"
          },
        ],
        textFooter: {
          link: "https://www.linkedin.com/in/edimilson-borges/",
          text: "Copyright © 2024. Todos los derechos reservados | Desarrollado por",
          name: "Edimilson Borges"
        }
      }
    }
  }
}