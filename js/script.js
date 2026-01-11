// Selecionando os elementos do HTML
const btnAutor = document.getElementById('btn-autor');
const btnLeitor = document.getElementById('btn-leitor');

// Função para lidar com o Autor
function entrarComoAutor() {
    console.log("Modo Autor ativado!");
    alert("Bem-vindo, Criador de Mundos!");
    // Futuramente: window.location.href = 'painel-autor.html';
}

// Função para lidar com o Leitor
function entrarComoLeitor() {
    console.log("Modo Leitor ativado!");
    alert("Bem-vindo, Viajante!");
    // Futuramente: window.location.href = 'biblioteca.html';
}

// Adicionando os ouvintes de evento (Clicks)
btnAutor.addEventListener('click', entrarComoAutor);
btnLeitor.addEventListener('click', entrarComoLeitor);