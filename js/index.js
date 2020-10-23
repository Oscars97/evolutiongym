'use strict'
// VARIABLES
var btnServices = document.querySelector('#link-services');


// EVENTS
btnServices.addEventListener("click", animateServices);


// FUNCTIONS
function animateServices() {
    document.getElementById('services').classList.add('animate');
};



