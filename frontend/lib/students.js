const students = [
  {
    disciplinaId: 1,
    alunos: [
      {
        id: 1,
        nome: "Carlos Silva",
        email: "carlos.silva@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo:
            "Esse aluno só aparece no Moodle quando o prazo está para acabar. Ele faz todas as atividades de uma vez, muitas vezes na última hora do último dia, correndo o risco de perder prazos ou enviar trabalhos incompletos.",
        },
        riscoEvasao: 87,
      },
      {
        id: 2,
        nome: "Luciana Mendes",
        email: "luciana.mendes@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo:
            "Matriculado na disciplina, mas praticamente nunca acessa o Moodle. Pode aparecer apenas para avaliações obrigatórias, se tanto. Dificilmente participa ativamente.",
        },
        riscoEvasao: 93,
      },
      {
        id: 3,
        nome: "João Costa",
        email: "joao.costa@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo:
            "Aquele aluno que acessa o Moodle com frequência, participa dos fóruns, lê os materiais, e entrega as atividades com antecedência. Costuma ter um bom desempenho.",
        },
        riscoEvasao: 12,
      },
      {
        id: 4,
        nome: "Fernanda Lima",
        email: "fernanda.lima@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Explorador",
          descricaoArquetipo:
            "Aluno curioso, mas inconsistente. Às vezes acessa diversos conteúdos num só dia e depois passa longos períodos sem atividade. Gosta de explorar o que chama a atenção, mas não segue uma linha de estudo contínua.",
        },
        riscoEvasao: 56,
      },
      {
        id: 5,
        nome: "André Pereira",
        email: "andre.pereira@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo:
            "Matriculado na disciplina, mas praticamente nunca acessa o Moodle.",
        },
        riscoEvasao: 95,
      },
      {
        id: 6,
        nome: "Mariana Rocha",
        email: "mariana.rocha@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo:
            "Participa ativamente e entrega atividades com antecedência.",
        },
        riscoEvasao: 20,
      },
      {
        id: 7,
        nome: "Diego Souza",
        email: "diego.souza@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo: "Só aparece no Moodle na última hora.",
        },
        riscoEvasao: 82,
      },
      {
        id: 8,
        nome: "Juliana Torres",
        email: "juliana.torres@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo: "Entrega tudo no prazo e acessa com frequência.",
        },
        riscoEvasao: 10,
      },
      {
        id: 9,
        nome: "Pedro Gomes",
        email: "pedro.gomes@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Explorador",
          descricaoArquetipo: "Explora bastante, mas sem regularidade.",
        },
        riscoEvasao: 48,
      },
      {
        id: 10,
        nome: "Renata Barros",
        email: "renata.barros@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo: "Nunca acessa o Moodle.",
        },
        riscoEvasao: 99,
      },
    ],
    riscoMedioEvasao: 60.2,
  },

  {
    disciplinaId: 2,
    alunos: [
      {
        id: 11,
        nome: "Eduardo Farias",
        email: "eduardo.farias@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo: "Faz tudo na última hora.",
        },
        riscoEvasao: 80,
      },
      {
        id: 12,
        nome: "Bianca Nunes",
        email: "bianca.nunes@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo: "Entrega com antecedência, participa.",
        },
        riscoEvasao: 15,
      },
      {
        id: 13,
        nome: "Ricardo Lopes",
        email: "ricardo.lopes@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo: "Quase nunca aparece.",
        },
        riscoEvasao: 91,
      },
      {
        id: 14,
        nome: "Tatiane Ferreira",
        email: "tatiane.ferreira@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo: "Muito engajada.",
        },
        riscoEvasao: 10,
      },
      {
        id: 15,
        nome: "Vinícius Moraes",
        email: "vinicius.moraes@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Explorador",
          descricaoArquetipo: "Acessa muito às vezes, depois some.",
        },
        riscoEvasao: 52,
      },
      {
        id: 16,
        nome: "Larissa Martins",
        email: "larissa.martins@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo: "Faz tudo no final.",
        },
        riscoEvasao: 78,
      },
      {
        id: 17,
        nome: "Henrique Duarte",
        email: "henrique.duarte@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo: "Não participa de nada.",
        },
        riscoEvasao: 96,
      },
      {
        id: 18,
        nome: "Amanda Reis",
        email: "amanda.reis@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo: "Sempre presente e participativa.",
        },
        riscoEvasao: 12,
      },
      {
        id: 19,
        nome: "Felipe Andrade",
        email: "felipe.andrade@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Explorador",
          descricaoArquetipo: "Curioso mas irregular.",
        },
        riscoEvasao: 61,
      },
      {
        id: 20,
        nome: "Natália Rocha",
        email: "natalia.rocha@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo: "Só aparece perto do prazo.",
        },
        riscoEvasao: 75,
      },
    ],
    riscoMedioEvasao: 57.0,
  },

  {
    disciplinaId: 3,
    alunos: [
      {
        id: 21,
        nome: "Marcelo Teixeira",
        email: "marcelo.teixeira@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo:
            "Matriculado na disciplina, mas praticamente nunca acessa o Moodle. Pode aparecer apenas para avaliações obrigatórias, se tanto. Dificilmente participa ativamente.",
        },
        riscoEvasao: 98,
      },
      {
        id: 22,
        nome: "Isabela Moura",
        email: "isabela.moura@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo:
            "Aquele aluno que acessa o Moodle com frequência, participa dos fóruns, lê os materiais, e entrega as atividades com antecedência. Costuma ter um bom desempenho.",
        },
        riscoEvasao: 18,
      },
      {
        id: 23,
        nome: "Tiago Fernandes",
        email: "tiago.fernandes@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Explorador",
          descricaoArquetipo:
            "Aluno curioso, mas inconsistente. Às vezes acessa diversos conteúdos num só dia e depois passa longos períodos sem atividade. Gosta de explorar o que chama a atenção, mas não segue uma linha de estudo contínua.",
        },
        riscoEvasao: 57,
      },
      {
        id: 24,
        nome: "Juliana Martins",
        email: "juliana.martins@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo:
            "Esse aluno só aparece no Moodle quando o prazo está para acabar. Ele faz todas as atividades de uma vez, muitas vezes na última hora do último dia, correndo o risco de perder prazos ou enviar trabalhos incompletos.",
        },
        riscoEvasao: 84,
      },
      {
        id: 25,
        nome: "Daniel Souza",
        email: "daniel.souza@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo:
            "Matriculado na disciplina, mas praticamente nunca acessa o Moodle.",
        },
        riscoEvasao: 92,
      },
      {
        id: 26,
        nome: "Aline Carvalho",
        email: "aline.carvalho@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo: "Participa de tudo e entrega com antecedência.",
        },
        riscoEvasao: 22,
      },
      {
        id: 27,
        nome: "Rafael Lima",
        email: "rafael.lima@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Explorador",
          descricaoArquetipo: "Explora muito em um dia e depois desaparece.",
        },
        riscoEvasao: 60,
      },
      {
        id: 28,
        nome: "Camila Torres",
        email: "camila.torres@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Constante",
          descricaoArquetipo: "Sempre presente e ativa nas discussões.",
        },
        riscoEvasao: 16,
      },
      {
        id: 29,
        nome: "Bruno Almeida",
        email: "bruno.almeida@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "UltimoHorista",
          descricaoArquetipo: "Só entrega tudo no último dia.",
        },
        riscoEvasao: 79,
      },
      {
        id: 30,
        nome: "Tatiane Ribeiro",
        email: "tatiane.ribeiro@aluno.unifenas.br",
        arquetipo: {
          nomeArquetipo: "Fantasma",
          descricaoArquetipo: "Praticamente ausente do Moodle.",
        },
        riscoEvasao: 95,
      },
    ],
    riscoMedioEvasao: 62.1,
  },
];

export { students };
