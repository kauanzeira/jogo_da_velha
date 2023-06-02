// Variaveis
let btn1 = 0;
let btn2 = 0;
let btn3 = 0;
let btn4 = 0;
let btn5 = 0;
let btn6 = 0;
let btn7 = 0;
let btn8 = 0;
let btn9 = 0;
let controle = 0;
let jogadas = 0;
let finalJogo = false;

// Click botão 1
function clickBtn1(){
   
    let btn = document.getElementById('btn1');

    if (btn.value == " " && !finalJogo) {  jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn1 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn1 = "O";
        }
    }
    verificaganhador();
}
// Click botão 2
function clickBtn2(){
    
    let btn = document.getElementById('btn2');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn2 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn2 = "O";
        }
    }
    verificaganhador();
}
// Click botão 3
function clickBtn3(){
    
    let btn = document.getElementById('btn3');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn3 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn3 = "O";
        }
    }
    verificaganhador();
}
// Click botão 4
function clickBtn4(){
    
    let btn = document.getElementById('btn4');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn4 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn4 = "O";
        }
    }
    verificaganhador();
}
// Click botão 5
function clickBtn5(){
    
    let btn = document.getElementById('btn5');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn5 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn5 = "O";
        }
    }
    verificaganhador();
}
// Click botão 6
function clickBtn6(){
    
    let btn = document.getElementById('btn6');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn6 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn6 = "O";
        }
    }
    verificaganhador();
}
// Click botão 7
function clickBtn7(){
    
    let btn = document.getElementById('btn7');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn7 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn7 = "O";
        }
    }
    verificaganhador();
}
// Click botão 8
function clickBtn8(){
    
    let btn = document.getElementById('btn8');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn8 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn8 = "O";
        }
    }
    verificaganhador();
}
// Click botão 9
function clickBtn9(){
    let btn = document.getElementById('btn9');

    if (btn.value == " " && !finalJogo) { jogadas++;
        if (controle == 0){
            controle = 1;
            btn.value = "X";
            btn9 = "X";
        }
        else {
            controle = 0;
            btn.value = "O";
            btn9 = "O";
        }
    }
    verificaganhador();
}
// Verifica ganhador
function verificaganhador(){
    let lblJogador = document.getElementById("lblJogador");
    let lblJogadas = document.getElementById("lblJogadas");

    // Verifica se Jogador X Ganhou 
    if(btn1=='X' && btn2=='X' && btn3=='X') {
        finalJogo = true
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador X ganhou!');
    }
    if(btn4=='X' && btn5=='X' && btn6=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador X ganhou!');
    }
    if(btn7=='X' && btn8=='X' && btn9=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
      //  alert('0 jogador X ganhou!');
    }
    if(btn1=='X' && btn4=='X' && btn7=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador X ganhou!');
    }
    if(btn2=='X' && btn5=='X' && btn8=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador X ganhou!');
    }
    if(btn3=='X' && btn6=='X' && btn9=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador X ganhou!');
    }if(btn1=='X' && btn5=='X' && btn9=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    if(btn3=='X' && btn5=='X' && btn7=='X') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador X ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador X ganhou!');
    }
    //Verifica se ganhador O ganhou
    if(btn1=='O' && btn2=='O' && btn3=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }
    if(btn4=='O' && btn5=='O' && btn6=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }
    if(btn7=='O' && btn8=='O' && btn9=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }
    if(btn1=='O' && btn4=='O' && btn7=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }
    if(btn2=='O' && btn5=='O' && btn8=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }
    if(btn3=='O' && btn6=='O' && btn9=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }if(btn1=='O' && btn5=='O' && btn9=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
       // alert('0 jogador O ganhou!');
    }
    if(btn3=='O' && btn5=='O' && btn7=='O') {
        finalJogo = true;
        lblJogador.innerText = "O Jogador O ganhou!"
        lblJogadas.innerText = " "
        return;
        //alert('0 jogador O ganhou!');
    }
    //Verifica se teve empate
if(jogadas==9){
    finalJogo = true;
    lblJogador.innerText = "Empate"
    lblJogadas.innerText = " "
    return;
}
    if(controle==0) {
        lblJogador.innerText = 'Jogador X';
    } else{
        lblJogador.innerText = 'Jogador O';
    }
    lblJogadas.innerText = '('+(jogadas+1) + 'ª Jogada)';
}
// Click do botão reiniciar
function clickReiniciar() {
btn1 = 0;
btn2 = 0;
btn3 = 0;
btn4 = 0;
btn5 = 0;
btn6 = 0;
btn7 = 0;
btn8 = 0;
btn9 = 0;
controle = 0;
jogadas = 0;
finalJogo = false;
// Reiniciar botões
let b1 = document.getElementById('btn1');
let b2 = document.getElementById('btn2');
let b3 = document.getElementById('btn3');
let b4 = document.getElementById('btn4');
let b5 = document.getElementById('btn5');
let b6 = document.getElementById('btn6');
let b7 = document.getElementById('btn7');
let b8 = document.getElementById('btn8');
let b9 = document.getElementById('btn9');

b1.value = ' ';
b2.value = ' ';
b3.value = ' ';
b4.value = ' ';
b5.value = ' ';
b6.value = ' ';
b7.value = ' ';
b8.value = ' ';
b9.value = ' ';

// Reiniciar Label
let lblJogador = document.getElementById('lblJogador');
let lblJogadas = document.getElementById('lblJogadas');

lblJogador.innerText = 'Jogador X';
lblJogadas.innerText = '1ª Jogada';
}