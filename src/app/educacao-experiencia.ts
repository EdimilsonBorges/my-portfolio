export interface IEducacao{
    ano:string;
    curso:string;
    empresa:string;
    descricao:string;
    linkCertificado:string;
}

export interface IExperiencia{
    ano:string;
    curso:string;
    empresa:string;
    descricao:string;
}

export const educacoes = [
    {ano:"2023", curso:"Desenvolvimento de Jogos", empresa:"Potência Tech iFood", descricao:"Foram 77 horas de aprendizado. Este bootcamp incluiu o desenvolvimento inicial de jogos utilizando JavaScript, os princípios fundamentais desse processo a partir de uma perspectiva de mercado e carreira. Conceitos como variáveis, escopo, tipos de dados, orientação a protótipo, funções e manipulação de listas e treino em projetos práticos ao longo do bootcamp, desenvolvendo os próprios jogos e compreendendo os fundamentos de uma carreira nessa área.", linkCertificado:"https://www.dio.me/certificate/98723684/share"},
    {ano:"2023", curso:"Bootcamp - Fullstack Java+Angular", empresa:"Santander Universidades", descricao:"Foram 115 horas de aprendizado neste bootcamp. O bootcamp concluiu desde os conceitos iniciais até tópicos avançados em desenvolvimento web, JavaScript, Angular, Java, bancos de dados relacionais e não relacionais, APIs REST e Spring Framework, visando aumentar a produtividade na criação de aplicativos web modernos e escaláveis.", linkCertificado:"https://www.dio.me/certificate/CA437454/share"},
    {ano:"2021", curso:"Curso de PHP Orientado a Objetos", empresa:"Celke", descricao:"Foram 70 horas de aprendizado neste curso. O curso abordou os conceitos fundamentais de programação orientada a objetos (POO) utilizando PHP. Os tópicos incluiram: Introdução aos princípios de POO. Criação de classes e objetos em PHP. Encapsulamento, herança e polimorfismo. Organização de código com namespaces. Tratamento de exceções. Desenvolvimento de aplicações práticas. Boas práticas, padrões de codificação banco de dados MYSQL e muito mais. O curso ofereceu uma combinação de teoria e prática, com exemplos e exercícios para consolidar o aprendizado dos alunos.", linkCertificado:"https://drive.google.com/file/d/1WSCae0JUjDmAOgrct2WeC-xazFBrCLPM/view?usp=drive_link"}
];
export const experiencias = [
    {ano:"2023", curso:"Espaço para mim e para todos: Lutas e questões de gênero.", empresa:"Mambee", descricao:"É um projeto comunitário que oferece uma perspectiva abrangente sobre as lutas e as relações de gênero, buscando introduzir e discutir esses temas no contexto da Educação Física Escolar. Propostos por meio de debates, encontros, experiências práticas e oportunidades que permitem uma compreensão mais ampla das Lutas, especialmente na forma como se relacionam com questões de gênero na escola."}
];