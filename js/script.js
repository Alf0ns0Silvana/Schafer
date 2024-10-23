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

// Función para cambiar la imagen en el modal galeria
function changeModalImage(imageSrc) {
    document.getElementById('modalImage').src = imageSrc;
}

// Función para cerrar cada modal
document.querySelectorAll('.modal-close').forEach(function(button) {
    button.addEventListener('click', function() {
        const modalId = this.getAttribute('data-target');
        document.getElementById(modalId).style.display = 'none';
    });
});

// Abrir modal de Términos y Condiciones
document.querySelector('.footer-link.terms').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('termsModal').style.display = 'block';
});

// Abrir modal de Política de Privacidad
document.querySelector('.footer-link.politics').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('politicsModal').style.display = 'block';
});

// Inicializar el mapa en el div con id "map"
var map = L.map('map').setView([-32.94682, -60.63932], 13); // Coordenadas de Rosario y zoom

// Capa de mosaicos de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añade los marcadores en los puntos de venta
L.marker([-32.94682, -60.63932]).addTo(map).bindPopup('Punto A (con envíos)').openPopup();
L.marker([-32.95483, -60.63056]).addTo(map).bindPopup('Punto B (sin envíos)');
L.marker([-32.94012, -60.65233]).addTo(map).bindPopup('Punto C (sin envíos)');

// Agregar un marcador en Rosario
L.marker([-32.94682, -60.63932]).addTo(map)
    .bindPopup('Rosario, Santa Fe, Argentina')
    .openPopup();