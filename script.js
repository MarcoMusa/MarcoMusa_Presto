let nav = document.querySelector('#p-navbar')
let btnNav = document.querySelector('#p-nav-btn')

document.addEventListener('scroll', function () {
    if (window.scrollY > 500) {
        nav.classList.add('p-nav-scrolled');
    } else {
        nav.classList.remove('p-nav-scrolled');
    }

    btnNav.addEventListener('click', function () {
        btnNav.classList.toggle('open')
    })
})