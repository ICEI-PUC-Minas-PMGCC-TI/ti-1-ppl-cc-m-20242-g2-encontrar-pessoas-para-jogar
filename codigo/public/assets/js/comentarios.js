document.addEventListener("DOMContentLoaded", () => {
    const comentariosContainer = document.getElementById("comentarios-container");
    const comentarBtn = document.getElementById("comentar-btn");
    const novoComentario = document.getElementById("novo-comentario");

    function carregarComentarios() {
        const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosContainer.innerHTML = ""; 
        comentariosSalvos.forEach(comentario => {
            adicionarComentarioNaTela(comentario);
        });
    }

    function adicionarComentarioNaTela(comentario) {
        const comentarioElemento = document.createElement("div");
        comentarioElemento.classList.add("mb-2", "p-2", "border", "rounded");
        comentarioElemento.style.backgroundColor = "#ffffff";
        comentarioElemento.textContent = comentario;
        comentariosContainer.appendChild(comentarioElemento);
    }

    function salvarComentario(comentario) {
        const comentariosSalvos = JSON.parse(localStorage.getItem("comentarios")) || [];
        comentariosSalvos.push(comentario);
        localStorage.setItem("comentarios", JSON.stringify(comentariosSalvos));
    }

    comentarBtn.addEventListener("click", () => {
        const comentarioTexto = novoComentario.value.trim();
        if (comentarioTexto) {
            salvarComentario(comentarioTexto);
            adicionarComentarioNaTela(comentarioTexto);
            novoComentario.value = ""; 
        } else {
            alert("Por favor, escreva um comentário antes de enviar.");
        }
    });

    carregarComentarios();
});
