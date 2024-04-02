const xIcon = document.querySelector('.fa-times')
const menuIcon = document.querySelector('.fa-bars')
const burgerNav = document.querySelector('.burgerNavigation')

allA = document.querySelectorAll('.burgerNavigation a')

const changeNav = () => {
    burgerNav.classList.toggle('hide')
    xIcon.classList.toggle('hide')
    menuIcon.classList.toggle('hide')
}

menuIcon.addEventListener('click', changeNav)
xIcon.addEventListener('click', changeNav)

allA.forEach(element => { element.addEventListener('click', changeNav)})
