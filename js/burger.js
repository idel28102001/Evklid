window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.gold-menu__pref').addEventListener('click', function() {
        document.querySelector('.gold-menu__pref').classList.toggle('burger-active')
        document.querySelector('.burger__menu').classList.toggle('burger__menu-active')
    })
})