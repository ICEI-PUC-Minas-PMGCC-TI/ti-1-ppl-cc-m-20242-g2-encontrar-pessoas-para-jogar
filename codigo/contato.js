function salvaContatos(contatos){
    localStorage.setItem ('db', JSON.stringify (contatos));
}

function leContatos() {
    let strContatos = localStorage.getItem('db');
    let objContatos = {};

    if (strContatos) {
        objContatos = JSON.parse(strContatos);
    } else {
        objContatos = {
            nickDiscord: "nosliw6969",
            nickPlay: "nosliW",
            epic: "https://store.epicgames.com/pt-BR/u/66d2decbe19f410999c8eebd05b49e17",
            steam: "https://steamcommunity.com/profiles/76561198319856715/",
            xbox: "https://www.xbox.com/pt-BR/play/user/MarcosVettel365"
        };
        
    }

    return objContatos;
}

function atualizaBotoes() {
    const objContatos = leContatos();

    // Configurando o botão da EpicGames -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (objContatos.epic === ""){
        document.getElementById("epicBtn").addEventListener("mouseover", () => {
            document.getElementById("epicBtn").innerHTML = `
                <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/epic_games_logo_icon_145306.png" alt="Epic Games">
                Não cadastrado
            `;
        });
        document.getElementById("epicBtn").addEventListener("mouseout", () => {
            document.getElementById("epicBtn").innerHTML = `
                <img src="https://cdn.icon-icons.com/icons2/2389/PNG/512/epic_games_logo_icon_145306.png" alt="Epic Games">
                Epic Games
            `;
        });
    }else{
        document.getElementById("epicBtn").addEventListener("click", () => window.open(objContatos.epic, "_blank"));
    }

    // Configurando o botão da Steam ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (objContatos.steam === ""){
        document.getElementById("steamBtn").addEventListener("mouseover", () => {
            document.getElementById("steamBtn").innerHTML = `
                <img src="https://static-00.iconduck.com/assets.00/steam-icon-512x512-loj8x1rd.png" alt="Steam">
                Não cadastrado
            `;
        });
        document.getElementById("steamBtn").addEventListener("mouseout", () => {
            document.getElementById("steamBtn").innerHTML = `
                <img src="https://static-00.iconduck.com/assets.00/steam-icon-512x512-loj8x1rd.png" alt="Steam">
                Steam
            `;
        });
    }else{
        document.getElementById("steamBtn").addEventListener("click", () => window.open(objContatos.steam, "_blank"));
    }

    // Configurando o botão do Xbox ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (objContatos.xbox === ""){
        document.getElementById("xboxBtn").addEventListener("mouseover", () => {
            document.getElementById("xboxBtn").innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/906/906325.png" alt="Xbox">
                Não cadastrado
            `;
        });
        document.getElementById("xboxBtn").addEventListener("mouseout", () => {
            document.getElementById("xboxBtn").innerHTML = `
                <img src="https://cdn-icons-png.flaticon.com/512/906/906325.png" alt="Xbox">
                Xbox
            `;
        });
    }else{
        document.getElementById("xboxBtn").addEventListener("click", () => window.open(objContatos.xbox, "_blank"));
    }

    // Configurando o botão do Discord ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    
    if (objContatos.nickDiscord === ""){
        document.getElementById("discordBtn").addEventListener("mouseover", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="https://img.icons8.com/?size=512&id=30998&format=png" alt="Discord">
                Não cadastrado
            `;
        });
        document.getElementById("discordBtn").addEventListener("mouseout", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="https://img.icons8.com/?size=512&id=30998&format=png" alt="Discord">
                Discord
            `;
        });
    }
    else{
        document.getElementById("discordBtn").addEventListener("mouseover", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="https://img.icons8.com/?size=512&id=30998&format=png" alt="Discord">
                ${objContatos.nickDiscord}
            `;
        });
        document.getElementById("discordBtn").addEventListener("mouseout", () => {
            document.getElementById("discordBtn").innerHTML = `
                <img src="https://img.icons8.com/?size=512&id=30998&format=png" alt="Discord">
                Discord
            `;
        });
        document.getElementById("discordBtn").addEventListener("click", () => {
            navigator.clipboard.writeText(objContatos.nickDiscord);
            alert("Nick copiado para a área de transferência.")
        });
    }

    // Configurando o botão do Playstation ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

    if (objContatos.nickPlay === ""){
        document.getElementById("playBtn").addEventListener("mouseover", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="https://www.pngplay.com/wp-content/uploads/13/Playstation-Logo-Free-PNG.png" alt="Playstation">
                Não cadastrado
            `;
        });
        document.getElementById("playBtn").addEventListener("mouseout", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="https://www.pngplay.com/wp-content/uploads/13/Playstation-Logo-Free-PNG.png" alt="Playstation">
                Playstation
            `;
        });
    }
    else{
        document.getElementById("playBtn").addEventListener("mouseover", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="https://www.pngplay.com/wp-content/uploads/13/Playstation-Logo-Free-PNG.png" alt="Playstation">
                ${objContatos.nickPlay}
            `;
        });
        document.getElementById("playBtn").addEventListener("mouseout", () => {
            document.getElementById("playBtn").innerHTML = `
                <img src="https://www.pngplay.com/wp-content/uploads/13/Playstation-Logo-Free-PNG.png" alt="Playstation">
                Playstation
            `;
        });
        document.getElementById("playBtn").addEventListener("click", () => {
            navigator.clipboard.writeText(objContatos.nickPlay);
            alert("Nick copiado para a área de transferência.")
        });
    }

}

atualizaBotoes();
