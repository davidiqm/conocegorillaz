const app = new Vue({
    el: '#app',
    data: {
        nombre: ""
    },
    methods: {
        metodoPrueba: (nombre) => {
            if (!nombre) {
                alert('Ingrese un nombre para cambiar el estilo');
            } else {
                color = document.getElementById('elemento');
                if (color.style.color != 'red') {
                    color.style.color = 'red';
                } else {
                    color.style.color = 'white';
                }
            }
        }
    }
});