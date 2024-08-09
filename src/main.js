document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelector('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao) {
            const tabAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${tabAlvo}]`)

            escondeAbas();
            aba.classList.add('shows__list--is-active');
        })
    }
})

function escondeAbas() {
    const tabsContainer = document.querySelector('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}