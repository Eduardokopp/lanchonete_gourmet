function trocar_produto(imagem, titulo, descricao) {
  
    document.getElementById("imagem_produto").src = imagem;
    document.getElementById("titulo").innerText = titulo;
    document.getElementById("descricao").innerText = descricao;
    this.style.animation = 'imgSelecionada 1s linear';
    



}

function modoBlack() {
    document.getElementById("titulo").style.color = "black";
    document.body.style.backgroundColor = "#fff";
    document.html.style.color = "black";

}