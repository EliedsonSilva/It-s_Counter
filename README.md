Sistema simples, Temporizador (Cronômetro).
Ferramentas de desenvolvimento:
  - HTML
  - CSS
  - JAVASCRIPT

HTML:
Desenvolvido para ser simples e explicar processos simples de criação de um Cromômetro.
O html contempla "divs" e o conceito de "class" para identificação no CSS, possui Botões
com "ids" para implementação do Javascript no backend.

CSS:
  O css possui peculiaridades de alguns parametros que são essenciais na estilização.
  Num projeto, o item principal que vem logo em cima é resetar o css:
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: sans-serif;
    }

  Também precisamos editar o "body" (toda a parte visivél da tela) geralmente inserimos valores fixos ea
  direcionamos os outros elementos para que os outros parametros obedeçam ele "body" pois ele é o limitador.
    body {
      width: 100vw;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 24px;
      background-color: #f4f4f9;
    }
  Esses parametros são essenciais para uma boa inicialização na estilização.

  JAVASCRIPT:
    O javascript "backend" é fundamental para dar vida ao html, podemos fazer a seguinte analogia:
    "O HTML é a casa com os comôdos, e o JS é o morador que vai trocar os moveis de lugar e estilizar a seu gosto".

  Precisamos sempre  chamar os "ids" e trazer eles para dentro do JS através das variavéis.
    const visor = document.getElementById('counterDisplay);

  Precisamos de 2 variavéis importantissimas para esse projeto que é o contador de segundos e uma variavél para travar a contagem.

    let segundos = 0;
    let timer = null;

  Agora não adianta chamar os elementos HTML para dentro de uma variavél, precisamos dar uma função para ele.
    Por exemplo: 
    O botão de play tem o id "play", chamamos ele atravéz do: const btnPlay = document.getElementById('play');
    Agora só dar a função para ele de click:
    
    btnPlay.addEventListener('click', function() {
        timer = setInterval(incrementar, 1000);
    });

  Temos no código alguns tratamentos de String, temos função para incrementar a variavél "let segundos" e os 
  eventos de click.

  Projeto contém bugs caso não seja realizado os tratamentos atuais.
  Como por exemplo: Clicks multiplos, causa bugs no sistema, uma simples condicional resolve tudo.

  - Intuito é fortalecer o aprendizado em sistemas WEB -
  - Eliedson Silva -
    
