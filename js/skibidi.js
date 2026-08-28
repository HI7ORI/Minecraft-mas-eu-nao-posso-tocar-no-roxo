document.addEventListener('DOMContentLoaded', () => {
    console.log('📜 Script skibidi.js carregado com sucesso!');

    // Seleciona todos os itens da lista de jogos
    const gameItems = document.querySelectorAll('main ul li');

    gameItems.forEach((item) => {
        item.addEventListener('click', () => {
            // Alterna a classe de seleção visual
            item.classList.toggle('selected');
            
            // Exibe o nome do jogo clicado no console
            const gameName = item.textContent;
            console.log(`Você clicou no jogo: ${gameName}`);
        });
    });
});