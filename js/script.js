window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};

// Filtro
const filterButtons = document.querySelectorAll('.filter-btn');
const beerCards = document.querySelectorAll('.beer-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        beerCards.forEach(card => {
            card.classList.remove('show');
            setTimeout(() => card.style.display = 'none', 800);
        });
        setTimeout(() => {
            beerCards.forEach(card => {
                if (filter === 'all' || card.classList.contains(filter)) {
                    card.style.display = 'block';
                    setTimeout(() => card.classList.add('show'), 100);
                }
            });
        }, 800);
    });
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.1 
});

beerCards.forEach(card => {
    observer.observe(card);
});

// Función para cambiar la imagen en el modal
function changeModalImage(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
}
