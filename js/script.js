window.onscroll = function() {
    const backToTop = document.querySelector('.back-to-top');
    if (document.documentElement.scrollTop > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};

// Mapa (ejemplo con Google Maps)
function initMap() {
    var location = { lat: -34.397, lng: 150.644 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: location
    });
}

// window.addEventListener('scroll', function () {
//   const navbar = document.querySelector('.navbar');
//   navbar.classList.toggle('navbar-scrolled', window.scrollY > 0);
// });

// // Google Maps initialization
// function initMap() {
//   const location = { lat: -34.397, lng: 150.644 };
//   const map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: location,
//   });
// }

// // Función para desplazar hacia arriba cuando se hace clic en la flecha
// document.getElementById('scrollToTop').addEventListener('click', function () {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth'
//     });
//   });
//    // Mostrar u ocultar el botón de "Ir arriba" cuando el usuario hace scroll
//   window.addEventListener('scroll', function () {
//     const scrollToTopBtn = document.getElementById('scrollToTop');
//     if (window.scrollY > 200) {
//       scrollToTopBtn.style.display = 'block';
//     } else {
//       scrollToTopBtn.style.display= 'none';
//     } 
// });


// document.addEventListener("DOMContentLoaded", function() {
//     const sections = document.querySelectorAll("section");
//     const backToTopButton = document.querySelector(".back-to-top");

//     const options = {
//         root: null,
//         threshold: 0.1,
//     };

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('visible');
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, options);

//     sections.forEach(section => {
//         observer.observe(section);
//     });

//     // Mostrar el botón de volver arriba al hacer scroll
//     window.addEventListener("scroll", function() {
//         if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
//             backToTopButton.style.display = "block";
//         } else {
//             backToTopButton.style.display = "none";
//         }
//     });

//     // Funcionalidad del botón de volver arriba
//     backToTopButton.addEventListener("click", function() {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     });
// });
// function initMap() {
//     // Ubicación inicial (puedes cambiarla a tu ubicación)
//     const myLocation = { lat: -34.397, lng: 150.644 }; // Cambia a tus coordenadas

//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 10,
//         center: myLocation,
//     });

//     // Marca la zona de envío
//     const marker = new google.maps.Marker({
//         position: myLocation,
//         map: map,
//         title: "Zona de Envío",
//     });

//     // Dibuja un círculo alrededor de la zona de envío (ejemplo: 5 km)
//     const circle = new google.maps.Circle({
//         strokeColor: "#FF0000",
//         strokeOpacity: 0.8,
//         strokeWeight: 2,
//         fillColor: "#FF0000",
//         fillOpacity: 0.35,
//         map: map,
//         center: myLocation,
//         radius: 5000, // 5 km
//     });
// }
