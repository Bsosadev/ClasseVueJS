
var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Discotecas en Peru',
        discotecas: [
            {
              nombre: 'Di Luna',
              imagen: 'app/img/diluna.png', 
              descripcion: 'Discoteca con ambiente vibrante y música variada.',
              ubicacion: 'Independencia, Lima'
            },
            {
              nombre: 'Discoteca Pari\'s',
              imagen: 'app/img/paris.jpg',
              descripcion: 'Discoteca popular con precios accesibles.',
              ubicacion: 'Lima' 
            },
            {
              nombre: 'Asia Disco Club',
              imagen: 'app/img/asia.jpg',
              descripcion: 'Club con música electrónica y eventos especiales.',
              ubicacion: 'Lima'
            },
            {
                nombre: 'The Who Club',
                imagen: 'app/img/thewhoclub.jpg', 
                descripcion: 'Discoteca icónica con música retro y ambiente divertido.',
                ubicacion: 'Miraflores, Lima'
              },
              {
                nombre: 'Bizarro Bar',
                imagen: 'app/img/bizarrobar.png', 
                descripcion: 'Discoteca alternativa con música indie y rock.',
                ubicacion: 'Barranco, Lima'
              },
              {
                nombre: 'Etnias Bar Cultural',
                imagen: 'app/img/etniasbar.jfif',
                descripcion: 'Discoteca con música latina, shows en vivo y ambiente festivo.',
                ubicacion: 'Miraflores, Lima'
              }
          ]
    }
})

