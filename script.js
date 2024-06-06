function redirecionar(url){
    window.location.href = url
}

const botoesRepositorio = document.querySelectorAll('.repositorio');

botoesRepositorio.forEach(button => {
    button.addEventListener('click', function() {
        const projectName = this.parentElement.parentElement.querySelector('h3').innerText;
        let urlRepositorio;
        switch (projectName) {
            case 'Automatização de Planilhas':
                urlRepositorio = 'https://github.com/Nathuyy/Automatizacao-de-Planilhas';
                break;
            case 'Controle de Estoque em Java':
                urlRepositorio = 'https://github.com/Nathuyy/controle-de-estoque';
                break;
            case 'Color Flipper':
                urlRepositorio = 'https://github.com/Nathuyy/FullStack-Projects/tree/main/color-flipper';
                break;
        }

        window.location.href = urlRepositorio;
        
    });

});