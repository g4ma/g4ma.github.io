let atual = 0;
const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const divAtual = document.getElementById("atual");
const array = [
  {
    titulo: "ENGENHARIA DE SOFTWARE",
    texto:
      "Gosta de programação e quer trabalhar com desenvolvimento de softwares? Essa é uma das funções de quem atua com Engenharia de Software. Esses profissionais trabalham criando, desenhando e desenvolvendo jogos, aplicativos, plataformas e os mais diversos tipos de sistema. No entanto, além da parte de desenvolvimento, são responsáveis também por gerenciar projetos, alinhar expectativas com clientes e revisar e atualizar os programas desenvolvidos.",
    imagem: "..\\assets\\images\\engenheiro.jpeg",
  },
  {
    titulo: "CIÊNCIA DE DADOS",
    texto:
      "O cientista de dados é responsável por coletar, gerenciar e transformar em modelos utilizáveis uma grande quantidade de dados não-estruturados, para que seja possível extrair desse conjunto informações relevantes. É um profissional capaz de interpretar e fazer com que os dados se comuniquem entre si e façam que informações múltiplas ganhem valor agregado e possam se tornar produtos valiosos para uma empresa.",
    imagem: "..\\assets\\images\\cientista-de-dados.jpeg",
  },
  {
    titulo: "SEGURANÇA DA INFORMAÇÃO",
    texto:
      "LGPD, GDPR, cookies, vazamento, hackers… Todos esses nomes estão relacionados a mais uma área de TI extremamente relevante e valiosa para as empresas: segurança da informação. Resumidamente, especialistas desse segmento trabalham para proteger os dados. Esses dados podem ser da empresa, clientes, usuários… O que importa é que todas as informações da rede estejam protegidas, livres de ameaças e devidamente armazenadas.",
    imagem: "..\\assets\\images\\segurança.jpeg",
  },
  {
    titulo: "DevOps",
    texto:
      "Profissionais de DevOps (abreviação de desenvolvimento e operações) são responsáveis por melhorar e otimizar o trabalho da equipe de desenvolvimento e a confiabilidade das operações, permitindo a integração de toda as partes envolvidas, padronizando os processos, implementando mais agilidade e oferecendo melhores experiências para a base usuária. Seu trabalho engloba todo o ciclo de produção, da idealização e desenvolvimento ao feedback e entrega do produto.",
    imagem: "..\\assets\\images\\devops.jpeg",
  },
  {
    titulo: "QA",
    texto:
      "A pessoa QA é o olho do cliente dentro da startup. Sendo assim, ela é uma pessoa responsável por analisar todos os aspectos de utilização do software ou aplicação. Enfim, verificar se tudo está sendo entregue conforme a expectativa do cliente. Portanto, é este(a) profissional quem vai orquestrar o trabalho de todos para que tudo saia conforme o esperado, reportando possíveis problemas e buscando melhorias constantes.",
    imagem: "..\\assets\\images\\qa.jpeg",
  },
];

function criarElemento(objeto) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");
  const divConteudo = document.createElement("div");
  divConteudo.classList.add("conteudo");
  const titulo = document.createElement("h2");
  const texto = document.createElement("p");
  const imagem = document.createElement("img");
  titulo.textContent = objeto.titulo;
  texto.textContent = objeto.texto;
  imagem.src = objeto.imagem;
  imagem.classList.add("image");
  divCard.appendChild(divConteudo);
  divConteudo.appendChild(titulo);
  divConteudo.appendChild(texto);
  divCard.appendChild(imagem);
  return divCard;
}

anterior.addEventListener("click", () => {
  atual--;
  slide();
});

proximo.addEventListener("click", () => {
  atual++;
  slide();
});

function slide() {
  if (atual >= array.length) {
    atual = 0;
  } else if (atual < 0) {
    atual = array.length - 1;
  }
  const novoElemento = criarElemento(array[atual]);
  divAtual.replaceChildren(novoElemento);
}

slide();
