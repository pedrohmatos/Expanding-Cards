const painel = document.querySelector('#container');

painel.addEventListener('click', (event) => {
    if (event.target.classList.contains('panel')) {
        event.target.classList.toggle('active');

        const text = event.target.querySelector('h3');
        text.classList.toggle('textActive');
    }
});