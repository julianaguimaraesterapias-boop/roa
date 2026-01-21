
// Fix: Added SpreadPosition to the import statement from './types'
import { TarotCard, SpreadPosition } from './types';

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 0,
    name: "O Louco",
    arcana: "Major",
    myth: "Dioniso",
    meaning: "Novos inícios, espontaneidade, aventura e o mergulho no desconhecido.",
    therapeutic: "Representa o impulso vital de mudança. Convida a confiar na vida e dar o salto de fé necessário, abandonando o que ficou para trás sem medo do julgamento alheio.",
    themeMeanings: {
      saude: "Necessidade de ar fresco e vitalidade; agir de forma mais leve e menos preocupada.",
      amor: "Uma nova fase ou relacionamento inesperado; liberdade e falta de amarras.",
      dinheiro: "Riscos calculados podem ser benéficos; novos caminhos financeiros surgindo."
    }
  },
  {
    id: 1,
    name: "O Mago",
    arcana: "Major",
    myth: "Hermes",
    meaning: "Ação, iniciativa, poder pessoal e manifestação.",
    therapeutic: "O guia interior que mostra que você possui todas as ferramentas para realizar seus sonhos. Pare de procrastinar e coloque seus dons em prática.",
    themeMeanings: {
      saude: "Habilidade de autocura e vitalidade mental aguçada.",
      amor: "Capacidade de conquistar e comunicar sentimentos de forma clara.",
      dinheiro: "Dinamismo para criar novas fontes de renda ou resolver problemas."
    }
  },
  {
    id: 2,
    name: "A Sacerdotisa",
    arcana: "Major",
    myth: "Perséfone",
    meaning: "Intuição, segredos, mistério e o inconsciente.",
    therapeutic: "Convite para olhar para dentro e ouvir a voz da alma. Nem tudo está revelado; paciência e introspecção são necessárias antes de agir.",
    themeMeanings: {
      saude: "Ouça as mensagens do seu corpo; intuição sobre o que precisa ser curado.",
      amor: "Relacionamento com alma; conexão profunda e mistério atraente.",
      dinheiro: "Aguarde o momento certo; confie em seus pressentimentos sobre investimentos."
    }
  },
  {
    id: 3,
    name: "A Imperatriz",
    arcana: "Major",
    myth: "Deméter",
    meaning: "Criatividade, abundância, fertilidade e nutrição.",
    therapeutic: "A Grande Mãe que nos lembra de cuidar do corpo e da vida material. Momento de frutificação e prazer nos sentidos. Use sua criatividade para prosperar.",
    themeMeanings: {
      saude: "Fertilidade, crescimento e vitalidade física plena.",
      amor: "Acolhimento, sensualidade e relacionamentos que nutrem a alma.",
      dinheiro: "Prosperidade e abundância através do trabalho criativo."
    }
  },
  {
    id: 4,
    name: "O Imperador",
    arcana: "Major",
    myth: "Zeus",
    meaning: "Autoridade, estrutura, estabilidade e liderança.",
    therapeutic: "Representa a capacidade de organizar a própria vida e estabelecer limites. Convida ao autodomínio e à construção de fundamentos sólidos.",
    themeMeanings: {
      saude: "Disciplina com o corpo; ordem e rotina para manter o bem-estar.",
      amor: "Proteção, segurança e estabilidade no relacionamento.",
      dinheiro: "Liderança firme; organização financeira e sucesso corporativo."
    }
  },
  {
    id: 5,
    name: "O Hierofante",
    arcana: "Major",
    myth: "Quíron",
    meaning: "Sabedoria, ensino, tradição e cura espiritual.",
    therapeutic: "O curador ferido que busca significado superior. Indica a necessidade de orientação ou estudo filosófico para encontrar seu lugar no mundo.",
    themeMeanings: {
      saude: "Curas através de métodos tradicionais ou sabedoria ancestral.",
      amor: "Valores compartilhados; busca por um parceiro que tenha os mesmos princípios.",
      dinheiro: "Seguir as regras; buscar conselhos de especialistas financeiros."
    }
  },
  {
    id: 6,
    name: "Os Enamorados",
    arcana: "Major",
    myth: "Paris",
    meaning: "Escolha, dualidade, amor e valores pessoais.",
    therapeutic: "A necessidade de escolher entre dois caminhos baseando-se no que o coração realmente deseja, não nas compulsões instintivas.",
    themeMeanings: {
      saude: "Equilíbrio emocional refletindo no bem-estar físico.",
      amor: "Parceria, escolha romântica importante ou reconciliação.",
      dinheiro: "Decisões financeiras que devem ser tomadas com ética e paixão."
    }
  },
  {
    id: 7,
    name: "O Carro",
    arcana: "Major",
    myth: "Ares",
    meaning: "Vitoria, movimento, controle e determinação.",
    therapeutic: "O controle consciente dos impulsos. Representa a maturidade de assumir as rédeas da vida e seguir em frente apesar dos conflitos internos.",
    themeMeanings: {
      saude: "Progresso rápido em tratamentos; força física recuperada.",
      amor: "Superar obstáculos juntos; determinação para fazer a relação funcionar.",
      dinheiro: "Sucesso alcançado com esforço e foco inabalável."
    }
  },
  {
    id: 8,
    name: "A Justiça",
    arcana: "Major",
    myth: "Atena",
    meaning: "Equilíbrio, verdade, karma e objetividade.",
    therapeutic: "Convita à análise fria e racional da situação. Colha o que semeou e assuma a responsabilidade por suas decisões passadas.",
    themeMeanings: {
      saude: "Equilíbrio químico ou hormonal; necessidade de moderação.",
      amor: "Honestidade e clareza; tratar o outro com equidade.",
      dinheiro: "Acordos justos; resolução de questões legais ou burocráticas."
    }
  },
  {
    id: 9,
    name: "O Eremita",
    arcana: "Major",
    myth: "Cronos",
    meaning: "Introspecção, solidão, busca interna e tempo.",
    therapeutic: "A sabedoria da paciência. É hora de se afastar do ruído externo para encontrar sua própria lanterna e verdade interior.",
    themeMeanings: {
      saude: "Recuperação lenta e cuidadosa; necessidade de repouso e silêncio.",
      amor: "Dar um tempo para si; autodescoberta antes de se unir a outro.",
      dinheiro: "Prudência financeira; evitar gastos impulsivos e planejar o futuro."
    }
  },
  {
    id: 10,
    name: "A Roda da Fortuna",
    arcana: "Major",
    myth: "As Moiras",
    meaning: "Mudança, destino, ciclos e oportunidades imprevistas.",
    therapeutic: "Lembre-se que tudo é cíclico. Aceite o que você não pode controlar e prepare-se para as viradas que a vida oferece.",
    themeMeanings: {
      saude: "Ciclos de vitalidade; atenção às mudanças sazonais do corpo.",
      amor: "Encontros de destino; mudanças bruscas na vida amorosa.",
      dinheiro: "Instabilidade que pode trazer grandes lucros ou perdas; esteja atento."
    }
  },
  {
    id: 11,
    name: "A Força",
    arcana: "Major",
    myth: "Héracles",
    meaning: "Coragem, paciência, controle mental sobre os instintos.",
    therapeutic: "Domar o 'leão interior' com suavidade e inteligência, não com força bruta. Representa o domínio da alma sobre as paixões animais.",
    themeMeanings: {
      saude: "Resiliência física e poder de recuperação mental.",
      amor: "Paixão domada pelo afeto; força do perdão no relacionamento.",
      dinheiro: "Persistência recompensada; autocontrole nos investimentos."
    }
  },
  {
    id: 12,
    name: "O Enforcado",
    arcana: "Major",
    myth: "Prometeu",
    meaning: "Sacrifício, suspensão, nova perspectiva e espera.",
    therapeutic: "Abrir mão do controle para que algo novo surja. Às vezes, a imobilidade é necessária para vermos o mundo sob um novo ângulo.",
    themeMeanings: {
      saude: "Período de estagnação necessária; tratamentos que exigem paciência.",
      amor: "Sacrifício pessoal pela relação ou pausa para reflexão profunda.",
      dinheiro: "Projetos em espera; não é o momento de investir ou agir."
    }
  },
  {
    id: 13,
    name: "A Morte",
    arcana: "Major",
    myth: "Hades",
    meaning: "Transformação, encerramento, renascimento e transição.",
    therapeutic: "Não é o fim físico, mas o fim de um ciclo ou atitude. Deixe o velho morrer para que o novo tenha espaço para florescer.",
    themeMeanings: {
      saude: "Transformação profunda no estilo de vida; cura após crise.",
      amor: "Fim de padrões antigos; renovação completa da relação.",
      dinheiro: "Mudança radical de carreira ou fonte de renda."
    }
  },
  {
    id: 14,
    name: "A Temperança",
    arcana: "Major",
    myth: "Íris",
    meaning: "Moderação, equilíbrio, harmonia e alquimia emocional.",
    therapeutic: "A busca pelo meio-termo. Harmonize as partes conflitantes de si mesmo para encontrar a paz e o fluxo correto da vida.",
    themeMeanings: {
      saude: "Equilíbrio vital; cura através da harmonia dos hábitos.",
      amor: "Relacionamento pacífico e equilibrado; troca genuína de afeto.",
      dinheiro: "Gestão equilibrada dos recursos; estabilidade sem excessos."
    }
  },
  {
    id: 15,
    name: "O Diabo",
    arcana: "Major",
    myth: "Pan",
    meaning: "Sombra, amarras, luxúria, materialismo e o poder do instinto.",
    therapeutic: "Encarar seus próprios demônios e desejos reprimidos para se libertar do medo. Reconheça suas sombras para que elas não o governem.",
    themeMeanings: {
      saude: "Atenção a vícios ou comportamentos obsessivos prejudiciais.",
      amor: "Atração física intensa; cuidado com dependência emocional.",
      dinheiro: "Ambição excessiva ou estar preso por questões financeiras."
    }
  },
  {
    id: 16,
    name: "A Torre",
    arcana: "Major",
    myth: "Poseidon",
    meaning: "Ruptura, caos, revelação e queda de falsas estruturas.",
    therapeutic: "O colapso do que é falso. Por mais doloroso que seja, a queda da torre limpa o terreno para construções mais verdadeiras.",
    themeMeanings: {
      saude: "Crise repentina que exige mudança imediata de hábitos.",
      amor: "Verdades reveladas que podem abalar a relação de forma definitiva.",
      dinheiro: "Choque financeiro; necessidade de reconstruir sobre bases reais."
    }
  },
  {
    id: 17,
    name: "A Estrela",
    arcana: "Major",
    myth: "Pandora (Esperança)",
    meaning: "Esperança, inspiração, renovação e fé no futuro.",
    therapeutic: "A luz após a tempestade. Confie na providência e siga sua inspiração; o universo está alinhado com seu propósito agora.",
    themeMeanings: {
      saude: "Cura, rejuvenescimento e bem-estar espiritual.",
      amor: "Relacionamento inspirado; novos horizontes e otimismo no amor.",
      dinheiro: "Sinal verde para novos projetos; fé no sucesso a longo prazo."
    }
  },
  {
    id: 18,
    name: "A Lua",
    arcana: "Major",
    myth: "Hécate",
    meaning: "Ilusão, confusão, sonhos e as profundezas do medo.",
    therapeutic: "Navegar pelas águas incertas do inconsciente. Cuidado com enganos e projecções. Use seus sonhos para guiar seus passos na escuridão.",
    themeMeanings: {
      saude: "Atenção à saúde mental e problemas 'invisíveis'.",
      amor: "Incerteza e confusão emocional; falta de clareza na relação.",
      dinheiro: "Cuidado com propostas obscuras; flutuações e instabilidade."
    }
  },
  {
    id: 19,
    name: "O Sol",
    arcana: "Major",
    myth: "Apolo",
    meaning: "Sucesso, alegria, vitalidade, clareza e expansão.",
    therapeutic: "O triunfo da consciência. Momento de brilhar por direito próprio, com otimismo e plenitude em todas as áreas.",
    themeMeanings: {
      saude: "Vitalidade radiante; excelente saúde e energia.",
      amor: "Amor aberto, feliz e correspondido; transparência total.",
      dinheiro: "Éxito material, clareza nos negócios e prosperidade visível."
    }
  },
  {
    id: 20,
    name: "O Julgamento",
    arcana: "Major",
    myth: "Hermes Psicopompo",
    meaning: "Renascimento, chamado, libertação e avaliação final.",
    therapeutic: "Um novo começo que emerge do passado. Perdoe-se e atenda ao chamado para uma nova fase mais autêntica de sua vida.",
    themeMeanings: {
      saude: "Novos tratamentos que trazem vida; despertar físico.",
      amor: "Segunda chance ou descoberta de um propósito comum profundo.",
      dinheiro: "Novas oportunidades que exigem avaliação do que foi feito até aqui."
    }
  },
  {
    id: 21,
    name: "O Mundo",
    arcana: "Major",
    myth: "Hermafrodito",
    meaning: "Plenitude, conclusão, sucesso total e integração.",
    therapeutic: "O estado de estar completo. Você alcançou a integração dos opostos e agora pode desfrutar da harmonia e do êxito total.",
    themeMeanings: {
      saude: "Bem-estar integral; corpo e mente em sintonia perfeita.",
      amor: "Relação plena; satisfação mútua e objetivos atingidos.",
      dinheiro: "Sucesso em escala global ou conclusão de grandes metas financeiras."
    }
  }
];

// Fix: Use the imported SpreadPosition type for the SPREADS constant
export const SPREADS: Record<string, SpreadPosition[]> = {
  day: [
    { title: "Conselho do Dia", description: "A energia principal para o seu dia de hoje." }
  ],
  three: [
    { title: "Passado", description: "As raízes da sua questão ou situação atual." },
    { title: "Presente", description: "Como a energia se manifesta no agora." },
    { title: "Futuro", description: "A tendência de desfecho se o caminho atual for mantido." }
  ],
  celtic: [
    { title: "Você Agora", description: "Seu estado atual e a situação central." },
    { title: "Desafio", description: "O obstáculo que está atravancando seu caminho." },
    { title: "Objetivo Consciente", description: "O que você busca deliberadamente." },
    { title: "Influência Desconhecida", description: "O que está na base, agindo no inconsciente." },
    { title: "Influências do Passado", description: "O que está acabando de passar pela sua vida." },
    { title: "Influências do Futuro", description: "O que está por se manifestar em breve." },
    { title: "Recurso Interior", description: "Seus talentos e força interna para lidar com a situação." },
    { title: "Fatores Ambientais", description: "Como o mundo externo e os outros veem você." },
    { title: "Esperanças e Medos", description: "Suas projeções emocionais sobre a questão." },
    { title: "Resultado Final", description: "O desdobramento natural desta jornada (próximos 6 meses)." }
  ]
};
