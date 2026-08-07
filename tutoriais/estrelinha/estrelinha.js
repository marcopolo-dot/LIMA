/*Adicionado um "Listener" para o movimento do mouse*/
window.addEventListener("mousemove", (elemento)=>{
    /*Criando uma div contendo o caracter que representa uma estrela*/
    const estrelinha = document.createElement("div");
    estrelinha.className = "estrelinha";
    estrelinha.style.left = elemento.clientX + "px";
    estrelinha.style.top = elemento.clientY + "px";
    estrelinha.style.position = "fixed";
    estrelinha.innerHTML = "&#10022;";

    //Criando uma deriva horizontal para o efeito de queda da estrela
    const xAleatorio = (Math.random() - 0.5) * 50 + "px";
    estrelinha.style.setProperty("--xAleatorio", xAleatorio);

    /*Acrescentando a div classe "estrelinha" ao body*/
    document.body.appendChild(estrelinha);

    
    //Removendo o elemento após o término da animação (800ms)
    setTimeout(()=>{
        estrelinha.remove();
        }, 1200)

})