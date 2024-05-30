var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Discotecas en Peru'
    }
})

var app2 = new Vue ({
    el: "#app2",
    data: {
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

var app3 = new Vue ({
    el: '#app3',
    data: {
        titulo: 'Calculadora de Tagos',
        valor1: "valor por defecto",
        venta: 0,
        envio: 0,
        subtotal: 0,
        impuestos: 0,
        total: 0,
        precios: {
            cerveza: 6.5,
            espumante: 12.5,
            vino: 15
        },
        cerveza: 0,
        espumante: 0,
        vino: 0,
        costos: {
            cerveza: 0,
            espumante: 0,
            vino: 0
        },
        tragos: {
            subtotal: 0,
            impuestos: 0,
            total: 0
        }
    },
    methods: {
        showMessage: function () {
            this.see = true;
            const alerta = "Este es el titulo: " + this.titulo;
            alert(alerta);
        },
        calcularMonto: function() {
            this.subtotal = Number(this.venta) + Number(this.envio);
            this.impuestos = Number(this.subtotal)*0.18;
            this.total = Number(this.subtotal) + Number(this.impuestos);
        },
        calculaTotalesTragos: function() {
            this.tragos.cantidad = Number(this.cerveza) + Number(this.espumante) + Number(this.vino);
            this.tragos.subtotal = Number(this.costos.cerveza) + Number(this.costos.espumante) + Number(this.costos.vino);
            this.tragos.impuestos = Number(this.tragos.subtotal)*0.18;
            this.tragos.total = Number(this.tragos.subtotal) + Number(this.tragos.impuestos);
        },
        calcularCerveza: function() {            
            const precio = this.precios.cerveza*Number(this.cerveza);
            this.costos.cerveza = precio;
            this.calculaTotalesTragos();
        },
        calcularEspumante: function() {
            const precio = this.precios.espumante*Number(this.espumante);
            this.costos.espumante = precio;
            this.calculaTotalesTragos();
        },
        calcularVino: function() {
            const precio = this.precios.vino*Number(this.vino);
            this.costos.vino = precio;
            this.calculaTotalesTragos();
        }

    }
})

var app4 = new Vue({
    el: '#app4',
    data: {
        titulo: 'Promedio de Cursos',
        cursos: [
            { tema: 'Desarrollo Web', nota: 0 },
            { tema: 'Ingenieria de Software', nota: 0 },
            { tema: 'Diseño Web', nota: 0 },
            { tema: 'Inteligencia Artificial', nota: 0 }
        ],
        promedio: 0,
        mensaje: ''
    },
    watch: {
        cursos: {
            handler: function() {
                this.calcularPromedio();
            },
            deep: true
        }
    },
    methods: {
        calcularPromedio: function() {
            let totalNotas = 0;
            let cantidadCursos = this.cursos.length;
            this.cursos.forEach(curso => {
                totalNotas += curso.nota;
            });
            this.promedio = cantidadCursos ? (totalNotas / cantidadCursos).toFixed(2) : 0;
            this.actualizarMensaje();
        },
        actualizarMensaje: function() {
            if (this.promedio <= 10) {
                this.mensaje = 'Desaprobado';
            } else {
                this.mensaje = 'Aprobado';
            }
        }
    }
});