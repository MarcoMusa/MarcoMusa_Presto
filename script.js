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



let categoriesWrapper = document.querySelector('#categories-wrapper')

let categories = [
    { title: 'Casa', annunci: 'Immobili', icon: '<i class="fas fa-home"></i>' },
    { title: 'Moto', annunci: 'Tutti i modelli', icon: '<i class="fas fa-motorcycle"></i>' },
    { title: 'Tech', annunci: 'Software - Hardware', icon: '<i class="fas fa-memory"></i>' },
    { title: 'Giardinaggio', annunci: 'Prodotti per esterno', icon: '<i class="fas fa-seedling"></i>' },
    { title: 'Abbigliamento', annunci: 'vario genere', icon: '<i class="fas fa-tshirt"></i>' },
    { title: 'Games', annunci: 'Console - Giochi', icon: '<i class="fas fa-gamepad"></i>' },
    { title: 'Libri', annunci: 'i più interessanti', icon: '<i class="fas fa-book-open"></i>' },
    { title: 'Animali', annunci: 'Per affido', icon: '<i class="fas fa-paw"></i>' },

];

categories.forEach(category => {
    let card = document.createElement('div');
    card.classList.add('col-12', 'col-sm-6', 'col-lg-3', 'my-3')
    card.innerHTML =
        `
                <div class="card p-card" data-aos="fade-down" style="width: 16rem;">
                  <div class="card-body">
                    <div class="p-card-icon-box">
                          ${category.icon}
                    </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 class="card-title fw-bold text-primary-dark mt-4">${category.title}</h5>
                          <h6 class="card-subtitle mb-2 text-muted">${category.annunci}</h6>
                        </div>
                        <a href="#" class="btn p-btn-primary1 rounded-pill">
                          <i class="fas fa-angle-right"></i>
                        </a>
                      </div>
                  </div>
                </div>
                `

    categoriesWrapper.appendChild(card)


})
