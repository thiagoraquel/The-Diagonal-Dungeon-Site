// 1. Inicializa o Editor Quill
var quill = new Quill('#editor-container', {
    theme: 'snow',
    placeholder: 'Escreva sua história aqui...',
    modules: {
        toolbar: [
            [{ 'header': [1, 2, false] }], // Títulos
            ['bold', 'italic', 'underline'], // Negrito, Itálico...
            [{ 'color': [] }, { 'background': [] }], // Cor da letra e fundo
            [{ 'font': [] }], // Fontes
            [{ 'align': [] }], // Alinhamento
            ['image', 'link'], // Imagem e Link (Áudio precisa de plugin extra, vamos focar nisso depois)
            ['clean'] // Limpar formatação
        ]
    }
});

// 2. Referências aos elementos
const inputTitulo = document.getElementById('titulo-capitulo');
const btnSalvar = document.getElementById('btn-salvar');
const listaCapitulos = document.getElementById('lista-capitulos');

// 3. Função para Salvar
btnSalvar.addEventListener('click', () => {
    const titulo = inputTitulo.value;
    const conteudo = quill.root.innerHTML; // Pega o HTML gerado pelo editor (com cores, imagens etc)

    if (!titulo) {
        alert("Por favor, dê um título ao capítulo!");
        return;
    }

    // Cria um objeto para o capítulo
    const capitulo = {
        id: Date.now(), // Gera um ID único baseado no tempo
        titulo: titulo,
        conteudo: conteudo
    };

    // Pega o que já tem salvo ou cria uma lista vazia
    let meusCapitulos = JSON.parse(localStorage.getItem('historias_salvas')) || [];
    
    // Adiciona o novo
    meusCapitulos.push(capitulo);

    // Salva de volta no navegador (transformando em texto)
    localStorage.setItem('historias_salvas', JSON.stringify(meusCapitulos));

    alert("Capítulo salvo com sucesso!");
    carregarCapitulos(); // Atualiza a lista na tela
});

// 4. Função para Carregar a lista na tela
function carregarCapitulos() {
    listaCapitulos.innerHTML = ''; // Limpa a lista atual
    let meusCapitulos = JSON.parse(localStorage.getItem('historias_salvas')) || [];

    meusCapitulos.forEach(cap => {
        const li = document.createElement('li');
        li.textContent = cap.titulo;
        
        // Botãozinho simples para carregar o texto de volta no editor (Edição)
        const btnEditar = document.createElement('button');
        btnEditar.textContent = "Editar";
        btnEditar.style.marginLeft = "10px";
        btnEditar.onclick = () => {
            inputTitulo.value = cap.titulo;
            quill.root.innerHTML = cap.conteudo;
        };

        li.appendChild(btnEditar);
        listaCapitulos.appendChild(li);
    });
}

// Carrega a lista assim que abre a página
carregarCapitulos();