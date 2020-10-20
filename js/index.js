'use strict'

var btnShow = document.querySelector('.btn-show-map');
var myMap = document.querySelector('.map');

btnShow.addEventListener('click', function(){
    
    if (myMap.className=='.show-element') {
        myMap.className('');
        console.log('I dont want to work as you want');
    }else{
        myMap.className='show-element';
        btnShow.innerHTML = 'Ocultar mapa';
    }
});





