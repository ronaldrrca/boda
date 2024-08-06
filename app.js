// Variables de la cuenta regresiva
let informacion__cuentaRegresiva__dias = document.getElementById("informacion__cuentaRegresiva__dias");
let informacion__cuentaRegresiva__horas = document.getElementById("informacion__cuentaRegresiva__horas");
let informacion__cuentaRegresiva__minutos = document.getElementById("informacion__cuentaRegresiva__minutos");
let informacion__cuentaRegresiva__segundos = document.getElementById("informacion__cuentaRegresiva__segundos");
const fechaBoda = new Date(2025, 2, 30, 17, 0, 0);// Fecha de la boda

//Variables del slider de imágenes
let foto_slider = ['foto2.webp', 'foto3.webp', 'foto4.webp', 'foto5.webp', 'foto6.webp'];
let indice_actual = 2;
let flecha_avanzar = document.getElementById('flecha_avanzar');
let flecha_retroceder = document.getElementById('flecha_retroceder'); 



//________________Código de la cuenta regresiva______________________________________________________________
setInterval(function() { 
    const fechaActual = new Date();
    //Obtiene la diferencia en milisegundos
    const diff = fechaBoda.getTime() - fechaActual.getTime();

    //Convierte la diferencia a días
    let dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    //Ajustando a doble dígito en caso de que el valor sea menor a 10
    dias < 10 ? dias = '0' + dias : null;
   
    //Convierte la diferencia a horas
    let horas = Math.floor(diff / (1000 * 60 * 60)) - (dias * 24);
    //Ajustando a doble dígito en caso de que el valor sea menor a 10
    horas < 10 ? horas = '0' + horas : null;
    
    //Convierte la diferencia a minutos
    let minutos = Math.floor(diff / (1000 * 60)) - (dias * 24 * 60) - (horas * 60);
    //Ajustando a doble dígito en caso de que el valor sea menor a 10
    minutos < 10 ? minutos = '0' + minutos : null;
    
    //Convierte la diferencia a segundos 
    let segundos = Math.floor(diff / 1000) - (dias * 24 * 60 * 60) - (horas * 60 * 60) - (minutos * 60);
    //Ajustando a doble dígito en caso de que el valor sea menor a 10
    segundos < 10 ? segundos = '0' + segundos : null;
    
    informacion__cuentaRegresiva__dias.innerHTML = dias;
    informacion__cuentaRegresiva__horas.innerHTML = horas;
    informacion__cuentaRegresiva__minutos.innerHTML = minutos;
    informacion__cuentaRegresiva__segundos.innerHTML = segundos;

}, 1000);


//________________Código del slider de imágenes______________________________________________________________

//Paso automático de las imágenes
setInterval(function() {
    while (indice_actual == 5) {
            indice_actual = 0   
    }
    document.getElementById('informacion__slider__foto').setAttribute('src', `./assets/${foto_slider[indice_actual]}`);
    indice_actual++;
}, 5000)


//Paso de las imágenes con las flechas de desplazamiento
flecha_avanzar.addEventListener('click', function(){
    while (indice_actual == 5) {
        indice_actual = 0   
    }
    document.getElementById('informacion__slider__foto').setAttribute('src', `./assets/${foto_slider[indice_actual]}`);
    indice_actual++;
})

flecha_retroceder.addEventListener('click', ()=>{
    while (indice_actual == -1) {
        indice_actual = 4;
    } 
    document.getElementById('informacion__slider__foto').setAttribute('src', `./assets/${foto_slider[indice_actual]}`);
    indice_actual--;
})
