const listaContainer = document.getElementById('lista-capitulos');
const tituloLeitura = document.getElementById('titulo-leitura');
const conteudoLeitura = document.getElementById('conteudo-leitura');

function carregarCapitulos() {
    // 1. Busca os dados salvos (igualzinho a página do autor)
    const capitulos = JSON.parse(localStorage.getItem('historias_salvas')) || [];

    // Se não tiver nada, avisa
    if (capitulos.length === 0) {
        listaContainer.innerHTML = '<p style="color:#888">Nenhum capítulo publicado ainda.</p>';
        return;
    }

    // 2. Cria os botões na lateral
    capitulos.forEach(cap => {
        const btn = document.createElement('button');
        btn.classList.add('btn-capitulo');
        btn.textContent = cap.titulo;
        
        // Quando clicar no botão do capítulo...
        btn.onclick = () => {
            exibirCapitulo(cap);
        };

        listaContainer.appendChild(btn);
    });
}

function exibirCapitulo(capitulo) {
    // Mostra o título
    tituloLeitura.style.display = 'block';
    tituloLeitura.textContent = capitulo.titulo;

    // A MÁGICA: Pega o HTML salvo pelo Quill e joga na div
    conteudoLeitura.innerHTML = capitulo.conteudo;
}

// Inicia tudo
carregarCapitulos();