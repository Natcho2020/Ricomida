// Tooltip enabling
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Utilizando los selectores de etiqueta y el método de jQuery `on` con el evento `click`, Notificacion de correo enviado. 

$("#enviarCorreo").on('click', function () {
    alert("El correo fue enviado correctamente");
});

//Utilizando los selectores de etiqueta y el método de jQuery `on` con el evento `click`, Notificacion de Añadido a favoritos. 

$("#añadirfavoritos").on('click', function () {
    alert("Añadido a Favoritos correctamente");
});

//Utilizando los selectores de etiqueta y el método de jQuery `on` con el evento `dblclick`, solamente modificar el color del texto de los títulos "INGREDIENTES" y "PREPARACIÓN" a color rojo cuando se haga doble clic sobre cada uno de ellos por individual.
$(document).ready(function () {
    $("#ingredientes").on('dblclick', function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });
    $("#preparacion").on('dblclick', function () {
        $(this).css({
            "color": "red",
            "font-size": "2em"
        });
    });
});

//Implementar los selectores de clases, utilizar el método de jQuery denominado `toggle` para hacer desaparecer y aparecer el contenido en todas las tarjetas "card" de la sección de Recetas Relacionadas, esto debe suceder cuando el usuario haga un clic sobre el título de cualquiera de las tres tarjetas.

$(document).ready(function () {
    $(".card-title").click(function () {
        $(this).next(".card-text").toggle();
    });
});