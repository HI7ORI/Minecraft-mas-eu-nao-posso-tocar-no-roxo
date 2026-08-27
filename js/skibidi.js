// 1. Seleciona TODOS os elementos 'li' da página
const todosOsBotoes = document.querySelectorAll("li");
const som = document.getElementById("somClique");

// 2. Passa por cada 'li' da lista individualmente
todosOsBotoes.forEach(function(butaoUnico) {
    
    // 3. Adiciona o evento de clique para o elemento atual do laço
    butaoUnico.addEventListener('click', function() {
        
        // Toca o som (opcional)
        if (som) {
            som.currentTime = 0;
            som.play().catch(e => console.log("Aguardando interação"));
        }

        // Adiciona a classe de piscar APENAS no 'li' que foi clicado
        butaoUnico.classList.add("piscar-fundo");

        // Remove a classe após 2 segundos do 'li' que foi clicado
        setTimeout(function() {
            butaoUnico.classList.remove("piscar-fundo");
        }, 2000); 
    });
    
});
