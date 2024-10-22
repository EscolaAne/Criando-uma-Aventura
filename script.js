const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    
    button.addEventListener('click',function( ){
        const atual = document.querySelector('.ativo');
        const proximoPass = 'passo-' + this.getAttribute ('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPass).classList.add('ativo');
    })
})