export interface IEducacao {
    "pt-br": IEducacaoItem[],
    "us": IEducacaoItem[],
    "es": IEducacaoItem[]
}

export interface IExperiencia {
    "pt-br": IExperienciaItem[],
    "us": IExperienciaItem[],
    "es": IExperienciaItem[]
}

export interface IEducacaoItem {
    ano: string;
    curso: string;
    empresa: string;
    descricao: string;
    linkCertificado: string;
}

export interface IExperienciaItem {
    ano: string;
    curso: string;
    empresa: string;
    descricao: string;
}

export const educacoes = {
    "pt-br": [{ ano: "2023", curso: "Desenvolvimento de Jogos", empresa: "Potência Tech iFood", descricao: "Foram 77 horas de aprendizado. Este bootcamp incluiu o desenvolvimento inicial de jogos utilizando JavaScript, os princípios fundamentais desse processo a partir de uma perspectiva de mercado e carreira. Conceitos como variáveis, escopo, tipos de dados, orientação a protótipo, funções e manipulação de listas e treino em projetos práticos ao longo do bootcamp, desenvolvendo os próprios jogos e compreendendo os fundamentos de uma carreira nessa área.", linkCertificado: "https://www.dio.me/certificate/98723684/share" },
    { ano: "2023", curso: "Bootcamp - Fullstack Java+Angular", empresa: "Santander Universidades", descricao: "Foram 115 horas de aprendizado neste bootcamp. O bootcamp concluiu desde os conceitos iniciais até tópicos avançados em desenvolvimento web, JavaScript, Angular, Java, bancos de dados relacionais e não relacionais, APIs REST e Spring Framework, visando aumentar a produtividade na criação de aplicativos web modernos e escaláveis.", linkCertificado: "https://www.dio.me/certificate/CA437454/share" },
    { ano: "2021", curso: "Curso de PHP Orientado a Objetos", empresa: "Celke", descricao: "Foram 70 horas de aprendizado neste curso. O curso abordou os conceitos fundamentais de programação orientada a objetos (POO) utilizando PHP. Os tópicos incluiram: Introdução aos princípios de POO. Criação de classes e objetos em PHP. Encapsulamento, herança e polimorfismo. Organização de código com namespaces. Tratamento de exceções. Desenvolvimento de aplicações práticas. Boas práticas, padrões de codificação banco de dados MYSQL e muito mais. O curso ofereceu uma combinação de teoria e prática, com exemplos e exercícios para consolidar o aprendizado dos alunos.", linkCertificado: "https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link" }
    ],
    "us": [{ ano: "2023", curso: "Game Development", empresa: "Potência Tech iFood", descricao: "There were 77 hours of learning. This bootcamp included initial game development using JavaScript, the fundamental principles of this process from a market and career perspective. Concepts such as variables, scope, data types, prototype orientation, functions and list manipulation and training in practical projects throughout the bootcamp, developing your own games and understanding the fundamentals of a career in this area.", linkCertificado: "https://www.dio.me/certificate/98723684/share" },
    { ano: "2023", curso: "Bootcamp - Fullstack Java+Angular", empresa: "Santander Universidades", descricao: "There were 115 hours of learning in this bootcamp. The bootcamp ranged from initial concepts to advanced topics in web development, JavaScript, Angular, Java, relational and non-relational databases, REST APIs and Spring Framework, aiming to increase productivity in creating modern and scalable web applications.", linkCertificado: "https://www.dio.me/certificate/CA437454/share" },
    { ano: "2021", curso: "Object Oriented PHP Course", empresa: "Celke", descricao: "There were 70 hours of learning in this course. The course covered the fundamental concepts of object-oriented programming (OOP) using PHP. Topics included: Introduction to OOP principles. Creation of classes and objects in PHP. Encapsulation, inheritance and polymorphism. Organization of code with namespaces. Exception handling. Development of practical applications. Good practices, MYSQL database coding standards and much more. The course offered a combination of theory and practice, with examples and exercises to consolidate students' learning.", linkCertificado: "https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link" }
    ],
    "es": [{ ano: "2023", curso: "Desarrollo de juegos", empresa: "Potência Tech iFood", descricao: "Fueron 77 horas de aprendizaje. Este bootcamp incluyó el desarrollo inicial de juegos utilizando JavaScript, los principios fundamentales de este proceso desde una perspectiva de mercado y profesional. Conceptos como variables, alcance, tipos de datos, orientación de prototipos, funciones y manipulación de listas y capacitación en proyectos prácticos a lo largo del bootcamp, desarrollando tus propios juegos y entendiendo los fundamentos de una carrera en esta área.", linkCertificado: "https://www.dio.me/certificate/98723684/share" },
    { ano: "2023", curso: "Bootcamp - Fullstack Java+Angular", empresa: "Santander Universidades", descricao: "Hubo 115 horas de aprendizaje en este bootcamp. El bootcamp abarcó desde conceptos iniciales hasta temas avanzados en desarrollo web, JavaScript, Angular, Java, bases de datos relacionales y no relacionales, API REST y Spring Framework, con el objetivo de aumentar la productividad en la creación de aplicaciones web modernas y escalables.", linkCertificado: "https://www.dio.me/certificate/CA437454/share" },
    { ano: "2021", curso: "Curso de PHP Orientado a Objetos", empresa: "Celke", descricao: "Fueron 70 horas de aprendizaje en este curso. El curso cubrió los conceptos fundamentales de la programación orientada a objetos (OOP) usando PHP. Temas incluidos: Introducción a los principios de la programación orientada a objetos. Creación de clases y objetos en PHP. Encapsulación, herencia y polimorfismo. Organización del código con espacios de nombres. Manejo de excepciones. Desarrollo de aplicaciones prácticas. Buenas prácticas, estándares de codificación de bases de datos MYSQL y mucho más. El curso ofreció una combinación de teoría y práctica, con ejemplos y ejercicios para consolidar el aprendizaje de los estudiantes.", linkCertificado: "https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link" }
    ]
};

export const experiencias = {
    "pt-br": [
        { ano: "2023", curso: "Espaço para mim e para todos: Lutas e questões de gênero.", empresa: "Mambee", descricao: "É um projeto comunitário que oferece uma perspectiva abrangente sobre as lutas e as relações de gênero, buscando introduzir e discutir esses temas no contexto da Educação Física Escolar. Propostos por meio de debates, encontros, experiências práticas e oportunidades que permitem uma compreensão mais ampla das Lutas, especialmente na forma como se relacionam com questões de gênero na escola." }
    ],
    "us": [
        { ano: "2023", curso: "Espaço para mim e para todos: Lutas e questões de gênero.", empresa: "Mambee", descricao: "It is a community project that offers a comprehensive perspective on gender struggles and relations, seeking to introduce and discuss these themes in the context of School Physical Education. Proposed through debates, meetings, practical experiences and opportunities that allow a broader understanding of the Struggles, especially as they relate to gender issues at school." }
    ],
    "es": [
        { ano: "2023", curso: "Espaço para mim e para todos: Lutas e questões de gênero.", empresa: "Mambee", descricao: "Es un proyecto comunitario que ofrece una perspectiva integral sobre las luchas y relaciones de género, buscando introducir y discutir estos temas en el contexto de la Educación Física Escolar. Propuestas a través de debates, encuentros, experiencias prácticas y oportunidades que permitan una comprensión más amplia de las Luchas, especialmente en lo que se refiere a cuestiones de género en la escuela." }
    ]
};