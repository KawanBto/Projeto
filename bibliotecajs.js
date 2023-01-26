
    let bemvindo = alert("Seja Bem-Vindo a Biblioteca Steam!") 
    let conta = "";
    let comando = "1";
    let resulnomes1 = "";
    let resulnomes2 = "";
    let resulnomes3 = "";
    let resulnomes4 = "";
    let resulnomes5 = "";
    let resulnomes6 = "";
    let resulnomes7 = "";
    let resulnomes8 = "";
    let resulnomes9 = "";
    let espaco = "";
    let espaco1 = "";
    let espaco2 = "";
    let espaco3 = "";
    let espaco4 = "";
    let espaco5 = "";
    let espaco6 = "";
    let nome1 = "";
    let nome2 = "";
    let nome3 = "";
    let nome4 = "";
    let nome5 = "";
    let nome6 = "";
    let salvo1 = "";
    let salvo2 = "";
    let salvo3 = "";
    let salvo4 = "";
    let salvo5 = "";
    let salvo6 = "";
    let salvo7 = "";
    let salvo8 = "";
    let salvo9 = "";
    let continua = "1";
    let salvojogo1 = "";
    let salvojogo2 = "";
    let salvojogo3 = "";
    let salvojogo4 = "";
    let salvojogo5 = "";
    let salvojogo6 = ""; 
    let finalnome1 ="";
    let finalnome2 ="";
    let finalnome3 ="";
    let finalnome4 ="";
    let finalnome5 ="";
    let form1 = "";
    let form2 = "";
    let form3 = "";
    let form4 = "";
    let form5 = "";
    let form6 = "";
    let nada1 = "Vazio";
    let nada2 = "Vazio";
    let nada3 = "Vazio";
    let nada4 = "Vazio";
    let nada5 = "Vazio";
    let nada6 = "Vazio";
    let lista ;
    let preco ;
    let jogoTexto;
    
    while (comando === "1") {
       
        comando = prompt("O que você gostaria no momento?\n\n 1 - Ver a biblioteca Steam de alguém.\n 2 - Cadastar uma nova biblioteca Steam\n 3 - Ver Jogos. \n0 - Sair ");

        switch (comando) {
                    
        case "1":
            
            conta = prompt("Digite o número de quem deseja ver ou 0 para sair.\n\n 1 - Kawan" + "\n 2 - Amanda" + "\n 3 - Kauan" + finalnome1 + finalnome2 + finalnome3 + finalnome4 + finalnome5);
            
            if (conta == "1") {
                
                salvo1 = "Kawan";
                document.getElementById("biblioteca").innerHTML = salvo1 + "</br> Dead by Daylight </br> Counter Strike </br> Rogue Company </br> Ark Survival Evolved </br> Rimworld";
                comando = "0";
                break;
                
            }else if(conta == "2"){
                
                salvo2 = "Amanda";
                document.getElementById("biblioteca").innerHTML = salvo2 + "</br></br> Left 4 Dead 2 </br> Stumble Guys </br> Castle Crashers </br> Stardew Valley </br> Terraria </br> Darkest Dungeon";
                comando = "0"
                break;
                
            }else if(conta == "3"){
                
                salvo3 = "Kauan";
                document.getElementById("biblioteca").innerHTML = salvo3 + "</br></br> Cuphead </br> Rainbow Six </br> Counter Strike </br> Multiversus </br> Wallpaper Engine </br> Yu-Gi-Oh! Duel Links </br>";
                comando = "0";
                break;

            }else if(conta == "4"){
                
                salvo4 = nome1;
                document.getElementById("biblioteca").innerHTML = salvo4 + "</br></br>" + form1;
                comando = "0";
                break;

            }else if(conta == "5"){
                        
                salvo5 = nome2;
                document.getElementById("biblioteca").innerHTML = salvo5 + "</br></br>" + form2;
                comando = "0";
                break;

            }else if(conta == "6"){
                        
                salvo6 = nome3;
                document.getElementById("biblioteca").innerHTML = salvo6 + "</br></br>" + form3;
                comando = "0";
                break;

            }else if(conta == "7"){
                        
                salvo7 = nome4;
                document.getElementById("biblioteca").innerHTML = salvo7 + "</br></br>" + form4;
                comando = "0";
                break;

            }else if(conta == "8"){
                        
                salvo8 = nome5;
                document.getElementById("biblioteca").innerHTML = salvo8 + "</br></br>" + form5;
                comando = "0";
                break;

            }else if(conta == "9"){
                        
                salvo9 = nome6;
                document.getElementById("biblioteca").innerHTML = salvo9 + "</br></br>" + form6;
                comando = "0";
                break;

    }else if (conta === "0"){
        comando = "1";
        break;
    }

        case "2":

    espaco = prompt("Escolha um espaço vázio ou digite 0 para sair.\n\n 1 - " + nada1 + "\n 2 - " + nada2 + "\n 3 - " + nada3 + "\n 4 - " + nada4 + "\n 5 - " + nada5 + " \n 6 - " + nada6)

        if (espaco === "1") {
            
            continua = "1"
            nome1 = prompt("Digite o nome da pessoa");
            nada1 = "Espaço Ocupado";
            finalnome1 = "\n 4 - " + nome1;

            while (continua === "1") {
                
                salvojogo1 = prompt("Qual o nome do jogo que deseja inserir?");
                form1 += salvojogo1 + "</br>";
                continua = prompt("Digite 1 para continuar adicionando jogos ou 0 para sair?");
                if (continua === "0") {
                    comando = "1";
                    break;
                }
                
            }
                
        }else if (espaco === "2") {
        
        continua = "1"
        nome2 = prompt("Qual o nome que você deseja inserir?");
        nada2 = "Espaço Ocupado";
        finalnome2 = "\n 5 - " + nome2;

        while (continua === "1") {
                
            salvojogo2 = prompt("Qual o nome do jogo que deseja inserir?");
            form2 += salvojogo2 + "</br>";
            continua = prompt("Digite 1 para continuar adicionando jogos ou 0 para sair?");
            if (continua = "0") {
                comando ="1";
                break;
            }
        }

    }else if (espaco === "3") {
                
        continua = "1"
        nome3 = prompt("Qual o nome que você deseja inserir?");
        nada3 = "Espaço Ocupado";
        finalnome3 = "\n 6 -"  + nome3;

        while (continua === "1") {
                
            salvojogo3 = prompt("Qual o nome do jogo que deseja inserir?");
            form3 += salvojogo3 + "</br>";
            continua = prompt("Digite 1 para continuar adicionando jogos ou 0 para sair?");
            if (continua === "0") {
                comando ="1";
                break;
            }
        }

    }else if (espaco === "4") {
                
        continua = "1"
        nome4 = prompt("Qual o nome que você deseja inserir?");
        nada4 = "Espaço Ocupado";
        finalnome4 = "\n 7 - " + nome4;

        while (continua === "1") {
                
            salvojogo4 = prompt("Qual o nome do jogo que deseja inserir?");
            form4 += salvojogo4 + "</br>";
            continua = prompt("Digite 1 para continuar adicionando jogos ou 0 para sair?");
            if (continua === "0") {
                comando = "1";
                break;
            }
    }

    }else if (espaco === "5") {
                
        continua = "1"
        nome5 = prompt("Qual o nome que você deseja inserir?");
        nada5 = "Espaço Ocupado";
        finalnome5 = "\n 8 - " + nome5;

        while (continua === "1") {
                
            salvojogo5 = prompt("Qual o nome do jogo que deseja inserir?");
            form5 += salvojogo5 + "</br>";
            continua = prompt("Digite 1 para continuar adicionando jogos ou 0 para sair?");
            if (continua === "0") {
                comando = "1";
                break;
            }
    }
}else if (espaco === "6") {
                
        continua = "1"
        nome6 = prompt("Qual o nome que você deseja inserir?");
        nada6 = "Espaço Ocupado";
        finalnome6 = "\n 9 - " + nome6;

        while (continua === "1") {
                
            salvojogo6 = prompt("Qual o nome do jogo que deseja inserir?");
            form6 += salvojogo6 + "</br>";
            continua = prompt("Digite 1 para continuar adicionando jogos ou 0 para sair?");
            if (continua === "0") {
                comando = "1";
                break;
            }
    }
}else if (espaco === "0"){

    comando = "1";
    break;
}

    case "3":
  
    if (comando === "3") {
        alert ("Bem vindo ao Carrinho")
        lista = Number(prompt("Selecione o jogo do seu carrinho ou 0 para voltar."));
        preco;
        jogoTexto;
        
        if (lista == 1) {
            
            jogoTexto = "Cuphead";
            preco = "R$:36,99"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 2) {
            
            jogoTexto = "Rainbow six";
            preco = "R$:59,99"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 3) {
            
            jogoTexto = "Stardew Valley";
            preco = "R$:25,00"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 4) {
            
            jogoTexto = "Detroit: Become Human";
            preco = "R$:134,99"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;

            
        }else if (lista == 5) {
            
            jogoTexto = "Marvel Spider-Man Remastered";
            preco = "R$:249,90"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 6) {
            
            jogoTexto = "Castle Crashers";
            preco = "R$:24,99"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 7) {
            
            jogoTexto = "Left 4 Dead 2";
            preco = "R$: 32,99"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 8) {
            
            jogoTexto = "CyberPunk";
            preco = "R$:199,90"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 9) {
            
            jogoTexto = "Terraria";
            preco = "R$:19,99";
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 10) {
            
            jogoTexto = "Life is Strange";
            preco = "Gratis";
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 11) {
            
            jogoTexto = "FIFA 23";
            preco = "R$:299,00"
            document.getElementById("steam").innerHTML= "</br>Jogo do Carrinho:  "+ lista + "</br>Jogo: "  + jogoTexto  + "</br>Preço: " + preco;
            
            
        }else if (lista == 0) {
            comando = "1"
        }
    }

        }   
    } 