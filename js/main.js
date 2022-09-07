const navItems = document.querySelector('.nav__items')
const burgerMenu = document.querySelector('.nav__burger')
const navItem = document.querySelector('.nav__item')
    
function addNavItems(){
    if(window.innerWidth > 647) {
        navItems.classList.add('active')
    }
}

function openBurgerMenu(){
    navItems.classList.toggle('active')
}

window.addEventListener('resize', addNavItems)

burgerMenu.addEventListener('click', openBurgerMenu)

navItem.addEventListener('click', function scrollToSection(event){
    document.querySelector(`.intro`).scrollIntoView()
})



