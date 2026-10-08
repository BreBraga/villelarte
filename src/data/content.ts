export const contact = {
  phoneLabel: '(21) 99277-8655',
  phoneDigits: '5521992778655',
  address: 'Av. Doutor Luiz Guimarães, 1019, Centro, Nova Iguaçu/RJ',
  mapsQuery: 'Avenida Doutor Luiz Guimarães, 1019, Centro, Nova Iguaçu - RJ',
  instagram: 'https://www.instagram.com/villelarteproducoes',
  facebook: 'https://www.facebook.com/villelarteproducoes/',
  youtube: 'https://www.youtube.com/@villelarteproducoes-felipe5748',
  youtubeVideoId: 'QZwO_qSC-Iw',
} as const

export const whatsappLink = (message: string) =>
  `https://wa.me/${contact.phoneDigits}?text=${encodeURIComponent(message)}`

export const ticketsUrl = 'https://lets.events/organizer/espacoculturalvillelarte/'

export const email = 'villelarteproducoes@gmail.com'

export type ChannelIcon = 'handshake' | 'masks' | 'card' | 'mail'

export type Channel = {
  title: string
  detail: string
  /** what the copy button puts on the clipboard */
  copyValue: string
  href: string
  icon: ChannelIcon
}

const wa = (digits: string) => `https://wa.me/${digits}`

export const channels: Channel[] = [
  { title: 'Falar com o Comercial', detail: '(21) 99277-8655 · WhatsApp', copyValue: '(21) 99277-8655', href: wa('5521992778655'), icon: 'handshake' },
  { title: 'Coordenação Sede', detail: '(21) 98765-6569 · WhatsApp', copyValue: '(21) 98765-6569', href: wa('5521987656569'), icon: 'masks' },
  { title: 'Atendimento Financeiro', detail: '(21) 97378-7011 · WhatsApp', copyValue: '(21) 97378-7011', href: wa('5521973787011'), icon: 'card' },
  { title: 'Enviar e-mail', detail: email, copyValue: email, href: `mailto:${email}`, icon: 'mail' },
]

export const mapsSearchLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`
export const mapsEmbedLink = `https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`

export type NavItem = { id: string; label: string }

export const nav: NavItem[] = [
  { id: 'quem-somos', label: 'Quem somos' },
  { id: 'cursos', label: 'Cursos' },
  { id: 'espaco', label: 'Espaço Cultural' },
  { id: 'cia', label: 'Cia Villelarte' },
  { id: 'equipe', label: 'Equipe' },
]

export type Fact = { value: string; label: string }

export const aboutFacts: Fact[] = [
  { value: '2014', label: 'Ano em que abrimos as cortinas em Nova Iguaçu.' },
  { value: '5+', label: 'Anos de idade para começar. Não existe idade máxima.' },
  { value: '6', label: 'Linguagens artísticas nos cursos regulares.' },
  { value: '20', label: 'Artistas e educadores na equipe Villelarte.' },
]

export type Course = { name: string; tag: string; text: string; image: string; alt: string }

export const courses: Course[] = [
  {
    name: 'Teatro',
    tag: 'Todas as idades',
    text: 'Oficinas de expressão, presença e convivência para crianças, jovens e adultos, com espetáculo no fim do ciclo.',
    image: '/assets/img/curso-teatro.jpg',
    alt: 'Alunos de teatro em cena com figurinos coloridos',
  },
  {
    name: 'Canto',
    tag: 'Música',
    text: 'Técnica vocal, interpretação e a experiência de cantar ao vivo nos nossos festivais de música.',
    image: '/assets/img/curso-canto.jpg',
    alt: 'Aluno cantando no palco sob luz azul',
  },
  {
    name: 'Instrumentos',
    tag: 'Violão e teclado',
    text: 'Aulas de violão e teclado em experiências de aprendizagem próximas, práticas e criativas.',
    image: '/assets/img/curso-instrumentos.jpg',
    alt: 'Aluno tocando violão no palco',
  },
  {
    name: 'Fotografia',
    tag: 'Imagem',
    text: 'Olhar, luz e composição na prática, com quem vive os bastidores e o palco todos os dias.',
    image: '/assets/img/curso-fotografia.jpg',
    alt: 'Professor fotografando em estúdio',
  },
  {
    name: 'Desenho',
    tag: 'Artes visuais',
    text: 'Arte que ensina e transforma: criatividade na prática para todas as idades.',
    image: '/assets/img/curso-desenho.jpg',
    alt: 'Desenho de um olho feito a lápis',
  },
  {
    name: 'Prática de montagem',
    tag: 'Do ensaio à estreia',
    text: 'Uma temporada inteira construindo um espetáculo. Já foram seis, incluindo um musical.',
    image: '/assets/img/curso-montagem.jpg',
    alt: 'Elenco em cena de um espetáculo de prática de montagem',
  },
]

export const productions: Fact[] = [
  { value: '14', label: 'mostras teatrais' },
  { value: '9', label: 'festivais de música' },
  { value: '7', label: 'provas públicas' },
  { value: '6', label: 'maratonas teatrais' },
  { value: '6', label: 'temporadas de prática de montagem' },
  { value: '4', label: 'festivais de comédia' },
  { value: '2', label: 'cantatas de Natal' },
  { value: '1', label: 'torneio de comédia e improviso' },
]

export const showAverages: Fact[] = [
  { value: '16', label: 'espetáculos diferentes, em média, a cada mostra' },
  { value: '+200', label: 'pessoas envolvidas em cada edição' },
  { value: '+2.000', label: 'pessoas de público médio por mostra' },
]

export const rooms = ['Recepção', 'Foyer', '2 salas de ensaio', 'Sala de música', 'Ateliê de criação e acervo', 'Sala de espetáculos']

export type Show = {
  title: string
  year: number
  synopsis: string
  nominations: number
  awards: number
  image?: string
  alt?: string
}

export const shows: Show[] = [
  {
    title: 'Quem conta um conto aumenta um ponto',
    year: 2024,
    synopsis: 'Espetáculo infantojuvenil em que personagens brincantes, numa festa do pijama, recontam contos do nosso folclore.',
    nominations: 21,
    awards: 10,
    image: '/assets/img/cia-quem-conta.jpg',
    alt: 'Cena de Quem conta um conto aumenta um ponto',
  },
  {
    title: 'Nictofobia',
    year: 2024,
    synopsis: 'Um mergulho no coração das trevas de Edgar Allan Poe, narrado por fobias vivas. Circulou pelos teatros do Sesc Baixada em 2025.',
    nominations: 25,
    awards: 17,
    image: '/assets/img/cia-nictofobia.jpg',
    alt: 'Elenco de Nictofobia em cena sombria',
  },
  {
    title: 'Em Baixópolis também existem crônicas',
    year: 2025,
    synopsis: 'Cena curta: Doralek parte em busca de Baixópolis, a civilização teatral da Baixada, e das companhias que vieram antes de nós.',
    nominations: 8,
    awards: 2,
  },
  {
    title: 'Soldado, poeta e rei',
    year: 2023,
    synopsis: 'Cena curta sobre as maneiras que inventamos para nos definir, dos quizzes de personalidade às constelações do Zodíaco.',
    nominations: 23,
    awards: 10,
    image: '/assets/img/cia-soldado-poeta-rei.jpg',
    alt: 'Cena de Soldado, poeta e rei sob luz azul',
  },
  {
    title: 'Cegos',
    year: 2022,
    synopsis: 'Inspirado no Mito da Caverna, de Platão: às vezes é necessário se cegar para poder enxergar.',
    nominations: 12,
    awards: 6,
    image: '/assets/img/cia-cegos.jpg',
    alt: 'Elenco de Cegos dentro de uma estrutura de grades',
  },
  {
    title: 'Esqueletos no Armário',
    year: 2021,
    synopsis: 'Uma metáfora para os segredos do passado que preferimos não revelar.',
    nominations: 12,
    awards: 6,
    image: '/assets/img/cia-esqueletos.jpg',
    alt: 'Elenco de Esqueletos no Armário',
  },
  {
    title: 'Contando e Recontando Contos',
    year: 2018,
    synopsis: 'Uma companhia de teatro recria clássicos como Chapeuzinho Vermelho e Cinderela com um toque leve e cômico.',
    nominations: 25,
    awards: 10,
    image: '/assets/img/cia-contando-recontando.jpg',
    alt: 'Elenco colorido de Contando e Recontando Contos',
  },
]

export type Founder = { name: string; role: string; bio: string; photo: string }

export const founders: Founder[] = [
  {
    name: 'Felipe Villela',
    role: 'Gestor e cofundador',
    bio: 'Ator profissional desde 2004 e diretor teatral, formado em Letras e pós-graduado em Teatro. Integrou o elenco de “Precisa-se de Velhos Palhaços”, com temporadas no Teatro Gláucio Gil e no Teatro Café Pequeno.',
    photo: 'felipe-villela',
  },
  {
    name: 'Lili Pardini',
    role: 'Cofundadora',
    bio: 'Visagista e atriz, assina entre 150 e 300 figurinos por ano. Soma 10 prêmios de figurino, 4 de cenografia, 2 de maquiagem e 4 de atuação.',
    photo: 'liliane-pardini',
  },
]

export type Member = { name: string; role: string; photo: string }

export const team: Member[] = [
  { name: 'Fernanda Cunha', role: 'Coordenadora da escola, professora de teatro e diretora da Cia', photo: 'fernanda-cunha' },
  { name: 'Adriano Santos', role: 'Iluminador e responsável técnico do Espaço', photo: 'adriano-santos' },
  { name: 'Lucas Cruz', role: 'Professor de teatro e coordenador técnico', photo: 'lucas-cruz' },
  { name: 'Bruna Ponciano', role: 'Professora de teatro e atriz', photo: 'bruna-ponciano' },
  { name: 'Luisa Mayão', role: 'Professora de teatro e produtora', photo: 'luisa-mayao' },
  { name: 'Libny Marques', role: 'Professor de teatro e ator', photo: 'libny-marques' },
  { name: 'Leticia Prado', role: 'Professora de teatro, atriz e bailarina', photo: 'leticia-prado' },
  { name: 'Ruan Bertolino', role: 'Professor de teatro e dramaturgo', photo: 'ruan-bertolino' },
  { name: 'Juliana Lacerda', role: 'Professora de canto e atriz', photo: 'juliana-lacerda' },
  { name: 'Suelen Soares', role: 'Professora de música e diretora musical', photo: 'suelen-soares' },
  { name: 'Edu Barros', role: 'Professor de desenho e fotografia', photo: 'edu-barros' },
  { name: 'Maria Clara Soledade', role: 'Coreógrafa', photo: 'maria-clara-soledade' },
  { name: 'Carolina Ferreira', role: 'Atriz e dramaturga da Cia', photo: 'carolina-ferreira' },
  { name: 'Emanuelle Marques', role: 'Atriz da Cia', photo: 'emanuelle-marques' },
  { name: 'Nícolas Villela', role: 'Auxiliar das turmas de teatro e ator', photo: 'nicolas-villela' },
  { name: 'Milla Villela', role: 'Auxiliar das turmas de teatro e atriz', photo: 'milla-villela' },
  { name: 'Roger Gosil', role: 'Mídia, redes sociais e apoio', photo: 'roger-gosil' },
  { name: 'Tathy de França', role: 'Recepção e administração', photo: 'tathy-de-franca' },
]

export const teamPhoto = (slug: string) => `/assets/img/equipe/${slug}.jpg`
