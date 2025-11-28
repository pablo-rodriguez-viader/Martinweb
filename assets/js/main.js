// main.js - Este archivo contiene el código JavaScript que maneja interacciones y dinámicas en el sitio web.

document.addEventListener('DOMContentLoaded', function() {
    // Código para inicializar la página o manejar eventos
    console.log('Counter Strike 2 Website Loaded');

    // Ejemplo de función para cargar datos de armas
    fetchWeaponsData();
});

function fetchWeaponsData() {
    fetch('./data/weapons.json')
        .then(response => response.json())
        .then(data => {
            console.log('Weapons Data:', data);
            // Aquí puedes agregar código para mostrar las armas en la página
        })
        .catch(error => {
            console.error('Error fetching weapons data:', error);
        });
}