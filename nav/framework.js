const app = new Vue({
    el: '#app',
    data: {
        nombre: "",
        metodoPrueba: () => {
            alert('se imprimio la prueba');
        }
    }
});