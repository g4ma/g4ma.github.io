const sem1Disc = [
    {
      disciplina: "Algoritmo e Lógica de programação",
      docente: "Fabio Gomes de Andrade",
      ch: 117
    },
    {
      disciplina: "Calculo Diferencial e Integral",
      docente: "Naiara Pereira Tavares",
      ch: 100
    },
    {
      disciplina: "Inglês Instrumental",
      docente: "Daniela Miguel de Souza Morais",
      ch: 33
    },
    {
      disciplina: "Linguagem de Marcação",
      docente: "Diogo Dantas Moreira",
      ch: 67
    },
    {
      disciplina: "Português Instrumental I",
      docente: "Francisco Igor Arraes Alves Rocha",
      ch: 33
    },
    {
      disciplina: "Fundamentos da Computação",
      docente: "André Lira Rolim",
      ch: 67
    }
  ];
  
  const sem2Disc = [
    {
      disciplina: "Estrutura de dados",
      docente: "André Lira Rolim",
      ch: 100
    },
    {
      disciplina: "Introdução à redes de computadores",
      docente: "Francisco Daladier Marques Junior",
      ch: 100
    },
    {
      disciplina: "Linguagens de Script",
      docente: "Diogo Dantas Moreira",
      ch: 67
    },
    {
      disciplina: "Probalidade e Estatística",
      docente: "---",
      ch: 83
    },
    {
      disciplina: "Gerência de Configuração e Mudanças",
      docente: "Francisco Paulo de Freitas Neto",
      ch: 33
    },
    {
      disciplina: "Sociedade e Tecnologia da Informação",
      docente: "Ana Paula da Cruz Pereira de Moraes",
      ch: 33
    }
  ];
  
  const sem3Disc = [
    {
      disciplina: "Metodologia da Pesquisa científica",
      docente: "Demetrio Gabriel Gamboa Marques",
      ch: 33
    },
    {
      disciplina: "Programação Orientada a Objetos",
      docente: "Paulo Ewerton Gomes Fragoso",
      ch: 100
    },
    {
      disciplina: "Sistemas Operacionais",
      docente: "Afonso Serafim Jacinto",
      ch: 83
    },
    {
      disciplina: "Bancos de Dados I",
      docente: "Fabio Gomes de Andrade",
      ch: 117
    },
    {
      disciplina: "Processos de Software",
      docente: "Francisco Paulo de Freitas Neto",
      ch: 83
    }
  ];
  
  const sem4Disc = [
    {
      disciplina: "Análise e Projeto de Sistema",
      docente: "Asheley Emmy Lacerda Alves",
      ch: 83
    },
    {
      disciplina: "Banco de Dados II",
      docente: "Francisco Paulo de Freitas Neto",
      ch: 83
    },
    {
      disciplina: "Laboratório de Redes de computadores",
      docente: "Francisco Daladier Marques Junior",
      ch: 50
    },
    {
      disciplina: "Testes de Software",
      docente: "Diogo Dantas Moreira",
      ch: 50
    },
    {
      disciplina: "Programação para Web I",
      docente: "Paulo Ewerton Gomes Fragoso",
      ch: 83
    },
    {
      disciplina: "Gerência de projetos de Software",
      docente: "Eva Maria Campos Pereira",
      ch: 67
    }
  ];
  
  const sem5Disc = [
    {
      disciplina: "Programação para Dispositivos Móveis",
      docente: "Fabio Abrantes Diniz",
      ch: 67
    },
    {
      disciplina: "Segurança de Dados",
      docente: "Francisco Daladier Marques Junior",
      ch: 83
    },
    {
      disciplina: "Interação Humano Computador",
      docente: "Asheley Emmy Lacerda Alves",
      ch: 67
    },
    {
      disciplina: "Padrões de projeto de Software",
      docente: "Diogo Dantas Moreira",
      ch: 83
    },
    {
      disciplina: "Desenvolvimento de Aplicações Corporativas",
      docente: "Asheley Emmy Lacerda Alves",
      ch: 100
    },
    {
      disciplina: "Trabalho de Conclusão de Curso I",
      docente: "Fabio Abrantes Diniz",
      ch: 33
    }
  ];
  
  const sem6Disc = [
    {
      disciplina: "Relações Humanas no trabalho",
      docente: "Mariana Ferreira Pessoa",
      ch: 67
    },
    {
      disciplina: "Programação para Web II",
      docente: "Paulo Ewerton Gomes Fragoso",
      ch: 83
    },
    {
      disciplina: "Sistema Distribuídos",
      docente: "Afonso Serafim Jacinto",
      ch: 83
    },
    {
      disciplina: "Gestão da Tecnologia da Informação e Comunicação",
      docente: "Fabio Abrantes Diniz",
      ch: 83
    },
    {
      disciplina: "Empreendedorismo",
      docente: "Mariana Ferreira Pessoa",
      ch: 67
    },
    {
      disciplina: "Trabalho de Conclusão de Curso II",
      docente: "Fabio Abrantes Diniz",
      ch: 33
    },
    {
      disciplina: "Libras I",
      docente: "Bruno Veloso de Farias Ribeiro",
      ch: 50
    }
  ];
  
  const sem1 = document.querySelector("#sem1");
  const sem2 = document.querySelector("#sem2");
  const sem3 = document.querySelector("#sem3");
  const sem4 = document.querySelector("#sem4");
  const sem5 = document.querySelector("#sem5");
  const sem6 = document.querySelector("#sem6");
  const tbody = document.querySelector("#conteudo-tabela");
  
  atualizarTabela(sem1Disc);
  
  function atualizarTabela(discAExibir) {
    const listaDeDisciplinas = [];
    const trLinha1 = document.createElement("tr");
    const tdNome = document.createElement("th");
    tdNome.textContent = "Disciplina";
    tdNome.classList.add("nome");
    const tdNomeDoc = document.createElement("th");
    tdNomeDoc.textContent = "Docente";
    tdNomeDoc.classList.add("docente");
    const tdNomeCH = document.createElement("th");
    tdNomeCH.textContent = "CH";
    trLinha1.appendChild(tdNome);
    trLinha1.appendChild(tdNomeDoc);
    trLinha1.appendChild(tdNomeCH);
    listaDeDisciplinas.push(trLinha1);
    discAExibir.forEach((semestre) => {
      const trLinha2 = document.createElement("tr");
      const tdDisciplina = document.createElement("td");
      tdDisciplina.classList.add("nome-disc");
      tdDisciplina.textContent = semestre.disciplina;
      const tdDocente = document.createElement("td");
      tdDocente.textContent = semestre.docente;
      const tdCH = document.createElement("td");
      tdCH.textContent = semestre.ch;
      trLinha2.appendChild(tdDisciplina);
      trLinha2.appendChild(tdDocente);
      trLinha2.appendChild(tdCH);
      listaDeDisciplinas.push(trLinha2);
    });
    tbody.replaceChildren(...listaDeDisciplinas);
  }
  
  sem1.addEventListener("click", () => {
    atualizarTabela(sem1Disc);
  });
  
  sem2.addEventListener("click", () => {
    atualizarTabela(sem2Disc);
  });
  
  sem3.addEventListener("click", () => {
    atualizarTabela(sem3Disc);
  });
  
  sem4.addEventListener("click", () => {
    atualizarTabela(sem4Disc);
  });
  
  sem5.addEventListener("click", () => {
    atualizarTabela(sem5Disc);
  });
  
  sem6.addEventListener("click", () => {
    atualizarTabela(sem6Disc);
  });
  
  const btn = document.querySelector("#btn");
  const atalho = document.querySelector("#atalho-topo");
  const voltarTopo = document.querySelector("#voltar-para-topo");
  
  atalho.addEventListener("mouseover", () => {
    voltarTopo.classList.add("show");
  });
  
  atalho.addEventListener("mouseout", () => {
    voltarTopo.classList.remove("show");
  });
  
  btn.addEventListener("click", function () {
    window.scrollTo(0, 0);
  });
  