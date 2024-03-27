let contador=0

const ligar = () => {
let btnEnviar = document.getElementById("btnEnviar");
  let lampada = document.getElementById("div-lampada");



 if (contador==0) {
     lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;

     btnEnviar.innerHTML = "apagar";
    contador++
 }else{
    lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;

    btnEnviar.innerHTML = "acender";
    contador--
 }
};




const gerarImagem = () => {
    let qtdImagem = document.getElementById("inQtdImg").value 
    

    document.getElementById
        ("canvas")
        canvas.innerHTML = ""

    for(let i = 1; i <= qtdImagem; i++) {
         canvas.innerHTML += `<img class = "imagens" id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    }
};



calcular = () => {
let inValorPedido = document.getElementById("inValorPedido");
let inPercDesc = document.getElementById("inPercDesc");
let inValDesc = document.getElementById("inValDesc");
let inValFinal = document.getElementById("inValFinal");

if (inValorPedido.value >= 2000){
   inPercDesc.value = 1.5;
    inValDesc.value = inValorPedido.value * 0.015;
    inValFinal.value = inValorPedido.value - inValDesc.value;
    
} else if (inValorPedido.value >= 1500){
    inPercDesc.value = 1.0;
     inValDesc.value = inValorPedido.value * 0.01;
     inValFinal.value = inValorPedido.value - inValDesc.value;
     
 } else if (inValorPedido.value >= 1000){
    inPercDesc.value = 0.8;
     inValDesc.value = inValorPedido.value * 0.008;
     inValFinal.value = inValorPedido.value - inValDesc.value;
     
 }  else if (inValorPedido.value >= 500){
    inPercDesc.value = 0.5;
     inValDesc.value = inValorPedido.value * 0.005;
     inValFinal.value = inValorPedido.value - inValDesc.value;

 }
}
const validaForm = () => {
            let inData = document.getElementById("inData").value;        
            let inCli = document.getElementById("inCli").value;
            let inFone = document.getElementById("inFone").value; 
            let inMail = document.getElementById("inMail").value;
            let inProd = document.getElementById("inProd").value;
            let inQtd = document.getElementById("inQtd").value;
            let inVal = document.getElementById("inVal").value;
            let msgErro = document.getElementById("mensagem-erro");

            msgErro.innerText = ""
            
            inData == "" && (msgErro.innerHTML += "Data inválida <br />")
            inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br />")
            inCli.length < 3 && (msgErro.innerHTML += "Nome do cliente inválido <br />")
            inFone == "" && (msgErro.innerHTML += "Telefone inválido <br />")
            inMail== "" && (msgErro.innerHTML += "E-mail inválido <br />")
            inMail.length < 6 && (msgErro.innerHTML += "E-mail inválido <br />")
            inProd == "" && (msgErro.innerHTML += "Produto inválido <br />")
            inProd.length < 6 && (msgErro.innerHTML += "Produto inválido <br />")
            inQtd == "" && (msgErro.innerHTML += "Quantidade inválida <br />")
            inQtd < 0 && (msgErro.innerHTML += "Quantidade inválida <br />")
            inVal == "" && (msgErro.innerHTML += "Valor inválido <br />")
            inVal < 0 && (msgErro.innerHTML += "Valor inválido <br />")
            
              // mostrar | ocultar erro
  msgErro.innerText == ""
  ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
  : (msgErro.style.display = "block");


msgErro.innerText == "enviado!" &&
  ((msgErro.style.display = "block"),
  (msgErro.innerText = "Formulário enviado com sucesso!"),
  (msgErro.className = "verde"));


}


   
 
 
   

