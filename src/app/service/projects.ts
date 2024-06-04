import { skills } from "./skills"

export const projects = [
    {
        img:'../../../assets/literAlura.png',
        title: 'LiterAlura',
        details: 'Desenvolvido um catálogo de livros, realizando solicitações a uma API, manipulando dados JSON, e armazenando em um banco de dados.',
        skills: [
            {
                name: 'Java',
                urlImg: skills.find(skill => skill.name === 'Java')?.urlImg || ''
            },
            {
                name: 'Trello',
                urlImg: skills.find(skill => skill.name === 'Trello')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            },
            {
                name: 'IntelliJ',
                urlImg: skills.find(skill => skill.name === 'IntelliJ')?.urlImg || ''
            },
            {
                name: "PostgreeSQL",
                urlImg: skills.find(skill => skill.name === "PostgreeSQL")?.urlImg || ''
            },
            {
                name: "Spring",
                urlImg: skills.find(skill => skill.name === "Spring")?.urlImg || ''
            }
        ],
        link: 'https://github.com/MisleneSM/literAlura-desadio',
        repo: 'https://github.com/MisleneSM/literAlura-desafio'
    },
    {
        img:'../../../assets/conversorMoeda.png',
        title: 'Conversor de Moedas',
        details: 'Desenvolvido um Conversor de Moedas trabalhando com ferramentas do Java e aprendendo a fazer requisições de uma API.',
        skills: [
            {
                name: 'Java',
                urlImg: skills.find(skill => skill.name === 'Java')?.urlImg || ''
            },
            {
                name: 'Trello',
                urlImg: skills.find(skill => skill.name === 'Trello')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            },
            {
                name: 'IntelliJ',
                urlImg: skills.find(skill => skill.name === 'IntelliJ')?.urlImg || ''
            }
        ],
        link: 'https://github.com/MisleneSM/conversorDeMoedas',
        repo: 'https://github.com/MisleneSM/conversorDeMoedas'
    },
    {
        img:'../../../assets/Food-review.jpg',
        title: 'Social Network',
        details: 'Desenvolvido uma rede social com foco na construção de uma Single-page Application (SPA) responsiva.',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'JavaScript',
                urlImg: skills.find(skill => skill.name === 'JavaScript')?.urlImg || ''
            },
            {
                name: 'Firebase',
                urlImg: skills.find(skill => skill.name === 'Firebase')?.urlImg || ''
            },
            {
                name: 'Figma',
                urlImg: skills.find(skill => skill.name === 'Figma')?.urlImg || ''
            },
            {
                name: 'Trello',
                urlImg: skills.find(skill => skill.name === 'Trello')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://food-review-mislene.web.app/',
        repo: 'https://github.com/MisleneSM/SAP010-social-network.git'
    },
    {
        img:'../../../assets/md-links.png',
        title: 'MD Links',
        details: 'Desenvolvido uma biblioteca para análise de arquivos Markdown, com ênfase na leitura, verificação de links e estatísticas associadas.',
        skills: [
            {
                name: 'JavaScript',
                urlImg: skills.find(skill => skill.name === 'JavaScript')?.urlImg || ''
            },
            {
                name: 'NodeJs',
                urlImg: skills.find(skill => skill.name === 'NodeJs')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://github.com/MisleneSM/SAP010-md-links.git',
        repo: 'https://github.com/MisleneSM/SAP010-md-links.git'
    },
    {
        img:'../../../assets/Jogos Blog.png',
        title: 'Jogos Blog',
        details: 'Desenvolvido um mini projeto de Blog responsivo, aprimorando novos conhecimentos do Framework Angular.',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'Angular',
                urlImg: skills.find(skill => skill.name === 'Angular')?.urlImg || ''
            },
            {
                name: 'TypeScript',
                urlImg: skills.find(skill => skill.name === 'TypeScript')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://angular-blog-gold.vercel.app/',
        repo: 'https://github.com/MisleneSM/dio-blog-angular'
    },
    {
        img:'../../../assets/BuzzFeed.png',
        title: 'BuzzFeed',
        details: 'Desenvolvido um mini clone de BuzzFeed responsivo, tendo como objetivo aprimorar novos conhecimentos no Framework Angular.',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'Angular',
                urlImg: skills.find(skill => skill.name === 'Angular')?.urlImg || ''
            },
            {
                name: 'TypeScript',
                urlImg: skills.find(skill => skill.name === 'TypeScript')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://dio-buzz-feed-angular.vercel.app/',
        repo: 'https://github.com/MisleneSM/dio-buzzFeed-angular'
    },
    {
        img:'../../../assets/Burguer-MV.png',
        title: 'Burguer MV',
        details: 'Neste projeto foi desenvolvido um sistema de pedidos para uma hamburgueria utilizando o framework Angular',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'Angular',
                urlImg: skills.find(skill => skill.name === 'Angular')?.urlImg || ''
            },
            {
                name: 'TypeScript',
                urlImg: skills.find(skill => skill.name === 'TypeScript')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            },
            {
                name: 'Insomnia',
                urlImg: '../assets/insomnia.png'
            }
        ],
        link: 'https://burguer-m-v-two.vercel.app/',
        repo: 'https://github.com/MisleneSM/Burguer-M-V.git'
    },
    {
        img:'../../../assets/Pokemon.jpg',
        title: 'Data Lovers - Pokemon',
        details: 'Desenvolvido uma página web que possibilita visualização, filtragem, ordenação alfabética e cálculos agregados dos dados dos personagens do Pokemon.',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'JavaScript',
                urlImg: skills.find(skill => skill.name === 'JavaScript')?.urlImg || ''
            },
            {
                name: 'Figma',
                urlImg: skills.find(skill => skill.name === 'Figma')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://nicoletsingas.github.io/SAP010-data-lovers/',
        repo: 'https://github.com/MisleneSM/SAP010-data-lovers.git'
    },
    {
        img:'../../../assets/card-validation.png',
        title: 'Card Validation',
        details: 'Neste projeto foi desenvolvido um site com intuito de realizar validações de cartão de crédito.',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'JavaScript',
                urlImg: skills.find(skill => skill.name === 'JavaScript')?.urlImg || ''
            },
            {
                name: 'Figma',
                urlImg: skills.find(skill => skill.name === 'Figma')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://mislenesm.github.io/SAP010-card-validation/',
        repo: 'https://github.com/MisleneSM/SAP010-card-validation.git'
    },
    {
        img:'../../../assets/Jogo da velha.png',
        title: 'Jogo da Velha',
        details: 'Neste projeto foi desenvolvido um mini jogo da velha para os amantes de jogos e de competição.',
        skills: [
            {
                name: 'HTML',
                urlImg: skills.find(skill => skill.name === 'HTML')?.urlImg || ''
            },
            {
                name: 'CSS',
                urlImg: skills.find(skill => skill.name === 'CSS')?.urlImg || ''
            },
            {
                name: 'JavaScript',
                urlImg: skills.find(skill => skill.name === 'JavaScript')?.urlImg || ''
            },
            {
                name: 'Git',
                urlImg: skills.find(skill => skill.name === 'Git')?.urlImg || ''
            },
            {
                name: 'GitHub',
                urlImg: skills.find(skill => skill.name === 'GitHub')?.urlImg || ''
            }
        ],
        link: 'https://jogo-da-velha-rose.vercel.app/',
        repo: 'https://github.com/MisleneSM/Jogo-da-Velha.git'
    }
]