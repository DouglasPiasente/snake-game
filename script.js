var pontos = 0

        window.onload = function () {

            var stage = document.getElementById('stage');
            var ctx = stage.getContext("2d");
            document.addEventListener("keydown", keyPush);
            setInterval(game, 100); //define um intervalo para uma função ser chamada várias vezes com esse intervalo. a cada 1000 mili segundos dividido por 15 vai chamar a função jogo

            const vel = 1; //quantas casas vai andar a cada vez que o game for chamado

            var vx = vy = 0;
            var px = 10;
            var py = 15;
            var tp = 25; //tamanho da peça
            var qp = 20; //quantidade de peças
            var ax = ay = 15;

            var trail = [];
            tail = 5;


            function game() {
                px += vx; //cabeça recebe a velocidade x para que ela fique parada até começar o jogo
                py += vy
                if (px < 0) {
                    px = qp - 1;
                }
                if (px > qp - 1) {
                    px = 0;
                }
                if (py < 0) {
                    py = qp - 1;
                }
                if (py > qp - 1) {
                    py = 0;
                }
                //ou seja se a cobra bater no fundo do palco ela precisa ir para o final

                ctx.fillStyle = "black";
                ctx.fillRect(0, 0, stage.width, stage.height); // estes comandos pintam o fundo do meu jogo com fillrect pintando desde o primeiro ponto até toda a largura e altura do tabuleiro

                ctx.fillStyle = "red";
                ctx.fillRect(ax * tp, ay * tp, tp, tp);

                ctx.fillStyle = "#37f500";
                for (var i = 0; i < trail.length; i++) {
                    ctx.fillRect(trail[i].x * tp, trail[i].y * tp, tp - 1, tp - 1)
                    if (trail[i].x == px && trail[i].y == py) {
                        vx = vy = 0;
                        tail = 5;
                        pontos = 0;
                
                    } //se bater a cabeça na cauda, o jogo é interrompido
                }

                trail.push({ x: px, y: py })
                while (trail.length > tail) {
                    trail.shift();
                } //tira elemento do arry [] se este for maior que a cauda

                if (ax == px && ay == py) {
                    tail++;
                    pontos++;
                    document.getElementById("pontos").innerHTML = pontos;
                    ax = Math.floor(Math.random() * qp);
                    ay = Math.floor(Math.random() * qp); //ao encostar na maça ele aumenta um ponto na cauda (tail++) e precisa randomizar uma nova maça com o Math.random
                }
            }

            function keyPush(event) {

                switch (event.keyCode) {
                    case 37: //esquerda
                        vx = -vel;
                        vy = 0;
                        break;
                    case 38: //cima
                        vx = 0;
                        vy = -vel;
                        break;
                    case 39: //direita
                        vx = vel;
                        vy = 0;
                        break;
                    case 40: //baixo
                        vx = 0;
                        vy = vel;
                        break;
                    case 65: //esquerda
                        vx = -vel;
                        vy = 0;
                        break;
                    case 87: //cima
                        vx = 0;
                        vy = -vel;
                        break;
                    case 68: //direita
                        vx = vel;
                        vy = 0;
                        break;
                    case 83: //baixo
                        vx = 0;
                        vy = vel;
                        break;
                    
                    default: arguments

                        break;

                }

            }




        }
        
