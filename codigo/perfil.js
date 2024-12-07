// Sprint 2 -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const commentsList = document.getElementById("comments-list");
    const commentInput = document.getElementById("comment-input");

    const URL_Comentarios = "http://localhost:3000/comentarioperfil";

    async function loadComments() {
        try {
            const response = await fetch(URL_Comentarios);
            const comentarioperfil = await response.json();

            if (comentarioperfil.length === 0) {
                commentsList.innerHTML = `<p>Perfil ainda sem comentário.</p>`;
            } else {
                commentsList.innerHTML = ""; 
                comentarioperfil.forEach(comment => {
                    displayComment(comment);
                });
            }
        } catch (error) {
            console.error("Erro ao carregar comentários:", error);
            commentsList.innerHTML = `<p>Erro ao carregar os comentários.</p>`;
        }
    }

    function displayComment(comment) {
        const commentElement = document.createElement("div");
        commentElement.className = "comment";
        commentElement.innerHTML = `
            <strong>${comment.idautor}:</strong>
            <p class="comment-text">${comment.mensagem}</p>
        `;
        commentsList.appendChild(commentElement);
    }

    async function addComment() {
        const newComment = {
            idautor: "Você",
            idreceptor: "Usuário",
            mensagem: commentInput.value.trim()
        };

        if (newComment.mensagem === "") {
            alert("Digite um comentário válido!");
            return;
        }

        try {
            const response = await fetch(URL_Comentarios, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newComment)
            });

            if (response.ok) {
                const comment = await response.json();
                displayComment(comment); 
                commentInput.value = ""; 
            } else {
                alert("Erro ao adicionar o comentário.");
            }
        } catch (error) {
            console.error("Erro ao adicionar comentário:", error);
            alert("Erro ao adicionar o comentário. Tente novamente.");
        }
    }

    document.querySelector("button").addEventListener("click", addComment);

    loadComments();
});

// Sprint 1 ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const URL_Contatos = "http://localhost:3000/contatos";

async function salvaContatos(contatos) {
    try {
        const response = await fetch(URL_Contatos, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(contatos)
        });

        if (!response.ok) {
            throw new Error("Erro ao salvar contatos");
        }
    } catch (error) {
        console.error("Erro ao salvar os contatos:", error);
    }
}

async function leContatos() {
    try {
        const response = await fetch(URL_Contatos);
        const dados = await response.json();

        if (dados && dados.length > 0) {
            return dados[0]; 
        }
    } catch (error) {
        console.error("Erro ao carregar os contatos:", error);
    }
}

async function atualizaBotoes() {
    const objContatos = await leContatos(); 

    // Configuração do botão do Discord
    if (objContatos.nickDiscord === "") {
        document.getElementById("discordBtn").addEventListener("mouseover", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="imagens/discord.png" alt="Discord">
                Não cadastrado
            `;
        });
        document.getElementById("discordBtn").addEventListener("mouseout", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="imagens/discord.png" alt="Discord">
                Discord
            `;
        });
    } else {
        document.getElementById("discordBtn").addEventListener("mouseover", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="imagens/discord.png" alt="Discord">
                ${objContatos.nickDiscord}
            `;
        });
        document.getElementById("discordBtn").addEventListener("mouseout", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="imagens/discord.png" alt="Discord">
                Discord
            `;
        });
        document.getElementById("discordBtn").addEventListener("click", () => {
            navigator.clipboard.writeText(objContatos.nickDiscord);
            alert("Nick copiado para a área de transferência.");
        });
    }

    // Configuração do botão da EpicGames
    if (objContatos.epic === "") {
        document.getElementById("epicBtn").addEventListener("mouseover", () => {
            document.getElementById("epicBtn").innerHTML = `
                <img src="imagens/epicgames.png" alt="Epic Games">
                Não cadastrado
            `;
        });
        document.getElementById("epicBtn").addEventListener("mouseout", () => {
            document.getElementById("epicBtn").innerHTML = `
                <img src="imagens/epicgames.png" alt="Epic Games">
                Epic Games
            `;
        });
    } else {
        document.getElementById("epicBtn").addEventListener("click", () => window.open(objContatos.epic, "_blank"));
    }

    // Configuração do botão da Steam
    if (objContatos.steam === "") {
        document.getElementById("steamBtn").addEventListener("mouseover", () => {
            document.getElementById("steamBtn").innerHTML = `
                <img src="imagens/steam.png" alt="Steam">
                Não cadastrado
            `;
        });
        document.getElementById("steamBtn").addEventListener("mouseout", () => {
            document.getElementById("steamBtn").innerHTML = `
                <img src="imagens/steam.png" alt="Steam">
                Steam
            `;
        });
    } else {
        document.getElementById("steamBtn").addEventListener("click", () => window.open(objContatos.steam, "_blank"));
    }

    // Configuração do botão do Playstation
    if (objContatos.nickPlay === "") {
        document.getElementById("playBtn").addEventListener("mouseover", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="imagens/play.png" alt="Playstation">
                Não cadastrado
            `;
        });
        document.getElementById("playBtn").addEventListener("mouseout", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="imagens/play.png" alt="Playstation">
                Playstation
            `;
        });
    } else {
        document.getElementById("playBtn").addEventListener("mouseover", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="imagens/play.png" alt="Playstation">
                ${objContatos.nickPlay}
            `;
        });
        document.getElementById("playBtn").addEventListener("mouseout", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="imagens/play.png" alt="Playstation">
                Playstation
            `;
        });
        document.getElementById("playBtn").addEventListener("click", () => {
            navigator.clipboard.writeText(objContatos.nickPlay);
            alert("Nick copiado para a área de transferência.");
        });
    }

    // Configuração do botão do Xbox
    if (objContatos.xbox === "") {
        document.getElementById("xboxBtn").addEventListener("mouseover", () => {
            document.getElementById("xboxBtn").innerHTML = `
                <img src="imagens/xbox.png" alt="Xbox">
                Não cadastrado
            `;
        });
        document.getElementById("xboxBtn").addEventListener("mouseout", () => {
            document.getElementById("xboxBtn").innerHTML = `
                <img src="imagens/xbox.png" alt="Xbox">
                Xbox
            `;
        });
    } else {
        document.getElementById("xboxBtn").addEventListener("click", () => window.open(objContatos.xbox, "_blank"));
    }
}

atualizaBotoes();
